#TO PLAY RUN 'ruby simon.rb'

class Simon
  COLORS = %w(red blue green yellow)
  SUCCESS = ["Well done. Let's keep going...",
    "Okay, I see you. Here's another...",
    "Quite the memory on you. Try this...",
    "Impressive. How far can you go?",
    "Correct!",
    "Not bad, but it gets harder..."]

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    self.take_turn until game_over
    if game_over
      self.game_over_message
      self.reset_game
    end
    
  end

  def take_turn
    self.show_sequence
    sleep 2
    system("clear")
    self.require_sequence
    unless @game_over
      self.round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    self.add_random_color
    puts seq
  end

  def require_sequence
    current_seq = @seq.dup
    until current_seq.empty? || @game_over
      current = current_seq.shift
      guess = gets.chomp.downcase
      if guess == current
        next
      else
        @game_over = true
      end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts SUCCESS.sample
  end

  def game_over_message
    puts "You lose. Do some brain exercises then play again."
  end

  def reset_game
    self.sequence_length = 1
    @game_over = false
    @seq = []
  end
end

new = Simon.new
new.play
