class LRUCache
    def initialize(n)
        @cache = []
        @max_length = n
    end

    def count
        @cache.length
    end

    def add(el)
      # adds element to cache according to LRU principle
            @cache.each do |ele|
                if ele == el
                    @cache.delete(ele)
                    break
                end
            end
            @cache.unshift(el)
            @cache = @cache.take(@max_length) if count > @max_length
    end

    def show
      # shows the items in the cache, with the LRU item first
      @cache.reverse
    end

    private
    # helper methods go here!

  end