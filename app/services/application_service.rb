class ApplicationService
  attr_accessor :result

  def initialize
    @result = Hash.new
    @result[:success] = false
    @result[:message] = 'Please Try again after some time'
  end

  def self.call(**args)
    new(**args).execute
  end
end
