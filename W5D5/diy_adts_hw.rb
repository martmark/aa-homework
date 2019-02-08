# Exercise 1

class Stack
    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end

    def pop
        @stack.pop
    end

    def peek
        @stack.last
    end


end


# Exercise 2

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue.first
    end

end


# Exercise 3

class Map
    def initialize
        @map = []
    end

    def set(key, value)
        if @map.none? { |pair| pair[0] == key }
            @map << [key, value]
        else
            @map.each do |pair|
                pair[1] = value if pair[0] == key
            end
        end
    end

    def get(key)
        if @map.none? { |pair| pair[0] == key }
            return nil
        else
            @map.each { |pair| return pair[1] if pair[0] == key }
        end
    end

    def delete(key)
        @map.each { |pair| @map.delete(pair) if pair[0] == key }
    end

end