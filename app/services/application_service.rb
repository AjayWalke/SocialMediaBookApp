class ApplicationService
  attr_accessor :result

  def initialize
    @result = OpenStruct.new(success: false, message: nil)
  end

  def self.call(**args)
    new(**args).execute
  end
end
