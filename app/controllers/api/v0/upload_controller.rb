module Api
  module V0
    class UploadController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :set_file_details, only: %i[upload_image]

      def upload_image
        unless @file.present?
          return render json: {
            success: false,
            message: 'Error while uploading image, Pls try again after some time'
          }, status: :unprocessable_entity
        end

        @file_path = save_img_temporarily
        link = GoogleDriveService::Base.upload_file_to_drive(@file_path)
        del_temporarily_img

        unless link.present?
          return render json: {
            success: false,
            message: 'Error while uploading image, Pls try again after some time'
          }, status: :unprocessable_entity
        end

        return render json: {
          success: true,
          message: 'File Uploaded Successfully',
          link: link
        }, status: :ok
      end

      private

      def set_file_details
        @file = params.dig(:file)
      end

      def save_img_temporarily
        file_path = Rails.root.join('tmp', @file.original_filename)
        File.open(file_path, 'wb') do |file|
          file.write(@file.read)
        end
        file_path.to_s
      end

      def del_temporarily_img
        File.delete(@file_path) if File.exist?(@file_path)
      end
    end
  end
end
