require 'google_drive'
require 'logger'

module GoogleDriveService
  class GoogleDriveBase
    DEFAULT_FOLDER = 'Images'

    def self.get_session
      @logger = Logger.new(STDOUT)
      GoogleDrive::Session.from_service_account_key('config/google_drive_service_api_key.json')
    end

    def self.create_new_folder(session, folder_name)
      folder = session.create_folder(folder_name)
      @logger.info("Created new folder '#{folder_name}' with ID: #{folder.id}")
    end

    def self.get_web_view_link(file_id)
      session = get_session

      # Fetch the file by ID
      file = session.file_by_id(file_id)

      if file.nil?
        @logger.error("File with ID '#{file_id}' not found.")
        return nil
      end

      shareable_link = file.web_view_link
      @logger.info("Generated shareable link for file '#{file.title}': #{shareable_link}")

      return shareable_link
    rescue => e
      @logger.error("An error occurred while generating the shareable link: #{e.message}")
      nil
    end

    def self.upload_file_to_drive(file_path, folder_name = DEFAULT_FOLDER)
        session = get_session

        folder = session.collection_by_title(folder_name)

        if folder.nil?
          @logger.error("Folder '#{folder_name}' not found.")
          create_new_folder(session, folder_name)
          folder = session.collection_by_title(folder_name)
        end
        # Upload the image file
        file = folder.upload_from_file(file_path, File.basename(file_path), convert: false)

        @logger.info("Uploaded image '#{File.basename(file_path)}' with ID: #{file.id}")
        return get_web_view_link(file.id)
      rescue => e
        @logger.error("An error occurred while uploading the image: #{e.message}")
    end
  end
end