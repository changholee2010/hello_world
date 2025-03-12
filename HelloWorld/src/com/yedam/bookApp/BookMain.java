package com.yedam.bookApp;

import java.util.Scanner;

/*
 * 등록, 수정, 삭제, 목록 
 */
public class BookMain {

	// 저장공간.
	static Book[] bookStore = new Book[100];
	static Scanner scn = new Scanner(System.in);

	// 등록.
	public static void add() {
		System.out.print("제목입력>> ");
		String title = scn.nextLine();
		System.out.print("저자입력>> ");
		String author = scn.nextLine();
		System.out.print("출판사입력>> ");
		String company = scn.nextLine();
		System.out.print("금액입력>> ");
		String price = scn.nextLine();
		// 입력항목을 확인.
		if (title.isBlank() || author.isBlank() || company.isBlank() || price.isBlank()) {
			System.out.println("항목을 입력하세요.");
			return; // 메소드 종료.
		}
		// Book 데이터를 생성.
		Book book = new Book(title, author, company, Integer.parseInt(price));
		// 배열에 추가.
		for (int i = 0; i < bookStore.length; i++) {
			if (bookStore[i] == null) {
				bookStore[i] = book;
				System.out.println("등록되었습니다.");
				break;
			}
		}
	} // end of add().

	// 수정.
	public static void edit() {
		System.out.print("제목입력>> ");
		String title = scn.nextLine();
		if (title.isBlank()) {
			System.out.println("책제목을 반드시 입력.");
			return;
		}
		System.out.print("저자입력>> ");
		String author = scn.nextLine();
		System.out.print("출판사입력>> ");
		String company = scn.nextLine();
		System.out.print("금액입력>> ");
		String price = scn.nextLine();
		// 조회 및 수정.
		boolean isExist = false;
		for (int i = 0; i < bookStore.length; i++) {
			if (bookStore[i] != null && bookStore[i].getTitle().equals(title)) {
				// 항목수정.
				if (!author.isBlank()) {
					bookStore[i].setAuthor(author);
				}
				if (!company.isBlank()) {
					bookStore[i].setCompany(company);
				}
				if (!price.isBlank()) {
					bookStore[i].setPrice(Integer.parseInt(price));
				}
				isExist = true;
				System.out.println("수정완료.");
			}
		}
		// 찾는 책이 없을 경우에 메세지.
		if (!isExist) {
			System.out.println("찾을 수 없습니다.");
		}
	} // end of edit().

	public static void main(String[] args) {

		boolean run = true;
		while (run) {
			System.out.println("1.도서등록 2.수정 3.삭제 4.목록 9.종료");
			System.out.print("선택>> ");

			int menu = Integer.parseInt(scn.nextLine());
			switch (menu) {
			case 1: // 등록.
				add();
				break;
			case 2: // 수정. 도서명으로 검색, 금액을 수정.
				edit();
				break;
			case 3: // 삭제. 도서명으로 검색 후 삭제.
				// 반드시 값을 입력받도록.
				while (true) {
					System.out.print("제목입력>> ");
					title = scn.nextLine();
					if (!title.isBlank()) { // 제목을 입력한 경우에..
						break;
					}
					System.out.println("제목을 입력하세요!!!");
				}
				// 삭제.
				isExist = false;
				for (int i = 0; i < bookStore.length; i++) {
					if (bookStore[i] != null && bookStore[i].getTitle().equals(title)) {
						bookStore[i] = null;
						System.out.println("삭제완료.");
						isExist = true;
						break;
					}
				}
				// 찾는 책이 없을 경우에 메세지.
				if (!isExist) {
					System.out.println("찾을 수 없습니다.");
				}
				break;
			case 4: // 목록.
				System.out.println("제목        저자   가격");
				System.out.println("====================");
				for (Book bok : bookStore) {
					if (bok != null)
						System.out.println(bok.showList());
				}
				break;
			case 8: // 샘플데이터.
				bookStore[0] = new Book("이것이자바다", "신용권", "한빛출", 20000);
				bookStore[1] = new Book("스크립트기초", "박기초", "우리출", 26000);
				bookStore[2] = new Book("HTML,CSS", "김하늘", "가람출", 25000);
				break;
			case 9: // 종료.
				System.out.println("프로그램을 종료합니다.");
				run = false;
				break;
			default:
				System.out.println("메뉴를 다시 선택하세요");
			}
		}
		System.out.println("end of prog.");
	} // end of main().
}
