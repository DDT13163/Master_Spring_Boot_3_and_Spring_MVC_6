package com.in28minutes.junit;

import junit.MyMath;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MyMathTest {

    private MyMath math = new MyMath();

    @Test
    void calculateThreeMemberArray() {
        Assertions.assertEquals(6, math.calculateSum(new int[]{1, 2, 3}));
    }

    @Test
    void calculateZeroLengthArray() {
        Assertions.assertEquals(0, math.calculateSum(new int[]{}));
    }
}
