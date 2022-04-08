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
	fmt.Println("This calculator performs an operation on two numbers.")

	fmt.Print("Value 1: ")
	f1 := getFloatInput(*reader)

	fmt.Print("Value 2: ")
	f2 := getFloatInput(*reader)

	fmt.Print("Select operation (+ - * /) : ")
	s, _ := reader.ReadString('\n')
	op := strings.TrimSpace(s)
	result := "Invalid operation selected."
	switch op {
	case "+":
		result = fmt.Sprintf("%.2f", sum(f1, f2))
	case "-":
		result = fmt.Sprintf("%.2f", difference(f1, f2))
	case "*":
		result = fmt.Sprintf("%.2f", product(f1, f2))
	case "/":
		result = fmt.Sprintf("%.2f", divide(f1, f2))
	}
	println(result)

}

func getFloatInput(reader bufio.Reader) float64 {
	s, _ := reader.ReadString('\n')
	f, e := strconv.ParseFloat(strings.TrimSpace(s), 64)
	if e != nil {
		panic("Invalid value, could not cast to float64.")
	} else {
		return f
	}
}

func sum(values ...float64) float64 {
	total, values := values[0], values[1:]
	for _, v := range values {
		total += v
	}
	return math.Round(total*100) / 100
}

func difference(values ...float64) float64 {
	total, values := values[0], values[1:]
	for _, v := range values {
		total -= v
	}
	return math.Round(total*100) / 100
}

func product(values ...float64) float64 {
	total, values := values[0], values[1:]
	for _, v := range values {
		total *= v
	}
	return math.Round(total*100) / 100
}

func divide(values ...float64) float64 {
	total, values := values[0], values[1:]
	for _, v := range values {
		total /= v
	}
	return math.Round(total*100) / 100
}
