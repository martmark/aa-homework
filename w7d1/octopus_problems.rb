all_fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# sluggish octopus

def sluggish(array)
    sorted = false

    until sorted
        sorted = true

        (0...array.length - 1).each do |i|
            x = i + 1
            if array[i].length > array[x].length
                array[i], array[x] = array[x], array[i]
                sorted = false
            end
        end

    end

    array
end


# dominant octopus

def dominant(array)
    sorted = false
    return array if array.count <= 1

    mid = array.count / 2
    left = dominant(array[0...mid])
    right = dominant(array[mid..-1])

    merge(left, right)
end

def merge(left, right)
    merged = []

    until left.empty? || right.empty?
        sub_merged = []  # lol "submerged"
        if left[0].length < right[0].length
            sub_merged << left.shift
        elsif left[0].length == right[0].length
            sub_merged << left.shift
        elsif right[0].length < left[0].length
            sub_merged << right.shift
        end
        merged << sub_merged
    end

    merged + left + right
end



# clever octopus

def clever(array)
    biggest_length = 0
    longest_ele = nil

    array.each do |ele|
        if ele.length > biggest_length
            biggest_length = ele.length
            longest_ele = ele
        end
    end

    longest_ele
end

puts "sluggish answer:"
puts sluggish(all_fish).last   # => "fiiiissshhhhhh"
puts "--------"
puts "dominant answer:"
puts dominant(all_fish).last  # => "fiiiissshhhhhh"
puts "--------"
puts "clever answer:"
puts clever(all_fish)  # => "fiiiissshhhhhh"