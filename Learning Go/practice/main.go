package main

import "fmt"

const cInt int = 64

func main() {

	// explicit typing
	var aString string = "This is Go!"

	fmt.Println(aString)
	fmt.Printf("The variable's type is %T\n", aString)

	var anInt int = 42
	fmt.Println(anInt)
	fmt.Printf("The variable's type is %T\n", anInt)

	// explicit typing w/o init value
	var defInt int
	fmt.Println(defInt)
	fmt.Printf("The variable's type is %T\n", defInt)

	// implicit typing
	var anotherString = "This is still Go!"
	fmt.Println(anotherString)
	fmt.Printf("The variable's type is %T\n", anotherString)

	// implicit typing, avoid var syntax
	myString := "Alternative assignment syntax" // this syntax only works for vars inside functions
	fmt.Println(myString)
	fmt.Printf("The variable's type is %T\n", myString)

	fmt.Println(cInt)
}
