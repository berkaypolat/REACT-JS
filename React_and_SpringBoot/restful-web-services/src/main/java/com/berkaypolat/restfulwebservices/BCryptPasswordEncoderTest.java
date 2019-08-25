package com.berkaypolat.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptPasswordEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		
		for (int i = 0; i < 10; i++) {
			String encoded = encoder.encode("123");
			System.out.println(encoded);
		}

	}

}
