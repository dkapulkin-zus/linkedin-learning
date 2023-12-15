package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

func main() {

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("This simple calculator sums two numbers.")

	fmt.Print("Value 1: ")
	s1, _ := reader.ReadString('\n')
	f1, e1 := strconv.ParseFloat(strings.TrimSpace(s1), 64)
	if e1 != nil {
		panic("Invalid value, could not cast to float64")
	}

	fmt.Print("Value 2: ")
	s2, _ := reader.ReadString('\n')
	f2, e2 := strconv.ParseFloat(strings.TrimSpace(s2), 64)
	if e2 != nil {
		panic("Invalid value, could not cast to float64")
	}

	floatSum := f1 + f2
	floatSum = math.Round(floatSum*100) / 100
	fmt.Printf("The sum of %v and %v is: %v\n\n", f1, f2, floatSum)

}
