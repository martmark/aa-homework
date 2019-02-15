class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new() }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, i|
      unless i == 6 || i == 13
        4.times { cup << :stone }
      end
    end
  end

  def valid_move?(s_pos)
    raise "Invalid starting cup" if !(0..5).include?(s_pos) && !(7..12).include?(s_pos)
    raise "Starting cup is empty" if @cups[s_pos].empty?
    true
  end

  def make_move(start_pos, current_player_name)
idx = start_pos
    hand = []
    hand << @cups[idx].pop until @cups[idx].empty?
    until hand.empty?
      idx = (idx + 1) % 14
      next if idx == 6 && current_player_name == @name2
      next if idx == 13 && current_player_name == @name1
      @cups[idx] << hand.pop
    end
    render
    next_turn(idx)
   
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      return :prompt
    elsif cups[ending_cup_idx].length == 1
      return :switch
    else
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0..5).all? { |i| cups[i].length == 0 } ||
    (7..12).all? { |i| cups[i].length == 0 }
  
  end

  def winner
    case cups[6].length <=> cups[13].length
    when 1
      return @name1
    when -1
      return @name2
    when 0
      return :draw
    end
  end
end
