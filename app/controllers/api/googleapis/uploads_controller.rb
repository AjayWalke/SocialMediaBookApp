require 'google/apis/drive_v3'
require 'googleauth'
require 'googleauth/stores/file_token_store'

class Googleapis::UploadsController < ApplicationController
  def create
    file = params[:file]

    if file.nil?
      render json: { error: 'No file provided' }, status: :bad_request
      return
    end

    file_id = upload_to_drive(file)

    if file_id
      folder_link = "https://drive.google.com/drive/folders/#{ENV['GOOGLE_DRIVE_FOLDER_ID']}"
      render json: { fileId: file_id, folderLink: folder_link }, status: :ok
    else
      render json: { error: 'Failed to upload file' }, status: :internal_server_error
    end
  end

  private

  def upload_to_drive(file)
    drive_service = initialize_drive_service

    metadata = {
      name: file.original_filename,
      parents: [ENV['GOOGLE_DRIVE_FOLDER_ID']]
    }

    file_metadata = Google::Apis::DriveV3::File.new(metadata)
    upload_source = StringIO.new(file.read)
    content_type = file.content_type

    begin
      file = drive_service.create_file(file_metadata, upload_source: upload_source, content_type: content_type)
      file.id
    rescue StandardError => e
      Rails.logger.error("Failed to upload file: #{e.message}")
      nil
    end
  end

  def initialize_drive_service
    scope = 'https://www.googleapis.com/auth/drive'
    authorization = Google::Auth::UserRefreshCredentials.new(
      client_id: ENV['GOOGLE_DRIVE_CLIENT_ID'],
      client_secret: ENV['GOOGLE_DRIVE_CLIENT_SECRET'],
      scope: scope,
      refresh_token: ENV['GOOGLE_DRIVE_REFRESH_TOKEN']
    )

    drive_service = Google::Apis::DriveV3::DriveService.new
    drive_service.authorization = authorization
    drive_service
  end
end
