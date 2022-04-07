package main

import (
	"fmt"
	"math"
)

func main() {

	i1, i2, i3 := 12, 42, 68
	intSum := i1 + i2 + i3
	fmt.Println(intSum)

	f1, f2, f3 := 23.5, 65.1, 76.3
	floatSum := f1 + f2 + f3 // binary precision issue will produce 164.899999
	// floatSum = math.Round(floatSum) // no colon operator because var already exists, returns an int
	floatSum = math.Round(floatSum*100) / 100 // gives 2 decimal point precision
	fmt.Println(floatSum)

	circleRadius := 15.5
	circumference := circleRadius * 2 * math.Pi
	fmt.Printf("Circumference: %.2f\n", circumference)
}
