require 'google/apis/drive_v3'
require 'googleauth'
require 'googleauth/stores/file_token_store'
require 'logger'

module GoogleDriveService
  class Base
    DEFAULT_FOLDER = 'Images'
    DRIVE_SCOPE = Google::Apis::DriveV3::AUTH_DRIVE
    APP_NAME = 'SocialMediaBookApp'

    def self.get_service
      @logger = Logger.new(STDOUT)

      service = Google::Apis::DriveV3::DriveService.new
      service.client_options.application_name = APP_NAME

      authorizer = Google::Auth::ServiceAccountCredentials.make_creds(
        json_key_io: File.open('config/google_drive_service_api_key.json'),
        scope: DRIVE_SCOPE
      )

      authorizer.fetch_access_token!
      service.authorization = authorizer

      service
    end
    def self.get_web_link(file_id)
      "https://drive.google.com/thumbnail?id=#{file_id}"
    end

    def self.upload_file_to_drive(file_path, folder_id = DEFAULT_FOLDER)
      service = get_service
      file_metadata = {
        name: File.basename(file_path),
        mime_type: 'image/jpeg'
      }
      file = service.create_file(
        file_metadata,
        upload_source: file_path,
        content_type: 'image/jpeg'
      )
      permission = Google::Apis::DriveV3::Permission.new(
        type: 'anyone',
        role: 'reader'
      )
      service.create_permission(file.id, permission)
      
      return get_web_link(file.id)
    rescue StandardError => e
      @logger.error("An error occurred while uploading the file: #{e.message}")
      nil
    end
  end
end

