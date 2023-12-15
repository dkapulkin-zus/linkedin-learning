package main

import (
	"fmt"
)

func main() {
	poodle := Dog{"Poodle", 10}
	fmt.Println(poodle)
	fmt.Printf("%+v\n", poodle)

}

// upperCase name indicates that it is "exported" (Public)
type Dog struct {
	// these fields are also public
	Breed  string
	Weight int
}
