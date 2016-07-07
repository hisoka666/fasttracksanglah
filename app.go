package main

import (
    "fmt"
    "net/http"
)

func init(){
	fs := http.FileServer(http.Dir("/"))
	http.Handle("/", fs)
}