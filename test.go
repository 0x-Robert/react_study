package main

import (
	"fmt"
	boom "github.com/tylertreat/BloomFilters"
)

func main(){

	stableBloomFilter := boom.NewDefaultStableBloomFilter(10000, 0.01)

	point := stableBloomFilter.StablePoint()
	fmt.Println(point)

	stableBloomFilter.Add([]byte(`a`))
	if stableBloomFilter.Test([]byte(`a`)) {
		fmt.Println("A")
	}

	

}