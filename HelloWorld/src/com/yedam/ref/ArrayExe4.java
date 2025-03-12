package com.yedam.ref;

public class ArrayExe4 {
	public static void main(String[] args) {
		int[] intAry = { 8, 7, 6, 5, 4 };
		// 위치변경.
		int temp = intAry[0];
		intAry[0] = intAry[1];
		intAry[1] = temp;

		for (int j = 0; j < intAry.length - 1; j++) {
			for (int i = 0; i < intAry.length - 1; i++) {
				// System.out.println(intAry[i]);
				// i, i+1 번째의 값이 내림차순이면 올리차순.
				
			}
		}
		// 출력.
		for (int i = 0; i < intAry.length; i++) {
			System.out.println(intAry[i]);
		}
	}
}
