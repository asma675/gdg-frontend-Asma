#!/bin/bash


echo "--- Simple Interest Calculator ---"

read -p "Enter Principal amount (P): " P

read -p "Enter Rate of interest per annum (R): " R

=read -p "Enter Time period in years (T): " T

if ! [[ "$P" =~ ^[0-9]+(\.[0-9]+)?$ ]] || ! [[ "$R" =~ ^[0-9]+(\.[0-9]+)?$ ]] || ! [[ "$T" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
    echo "Error: All inputs must be positive numbers."
    exit 1
fi

SI=$(echo "scale=2; ($P * $R * $T) / 100" | bc)

echo "----------------------------------"
echo "Principal (P): $P"
echo "Rate (R): $R%"
echo "Time (T): $T years"
echo "----------------------------------"
echo "The Simple Interest (SI) is: $SI"
echo "----------------------------------"
