package com.in28minutes.junit;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

public class MyAssertTest {

    List<String> todos = Arrays.asList("AWS","Azure","DevOps");

    @Test
    void test() {
        boolean test = todos.contains("AWS");
        boolean test2 = todos.contains("GCP");
//        assertEquals(true, test);
        Assertions.assertTrue(test);
        Assertions.assertFalse(test2);
        Assertions.assertEquals(3, todos.size());
        Assertions.assertArrayEquals(new int[]{1,2}, new int[]{2,1});
    }
}
