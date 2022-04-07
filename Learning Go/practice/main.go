package main

import (
	"fmt"
)

func main() {

	states := make(map[string]string) // keys and values are both strings
	fmt.Println(states)

	states["CA"] = "California"
	states["TX"] = "Texas"
	states["NY"] = "New York"

	for k, v := range states {
		fmt.Printf("%v %v\n", k, v)
	}
}
