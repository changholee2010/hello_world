package com.yedam.common;

import java.io.IOException;
import java.util.Date;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.LogVO;

public class LogFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		LogVO info = new LogVO();
		info.setExecTime(new Date());
		info.setExecIp("");
		info.setExecPage("");

		MemberService svc = new MemberServiceImpl();
		svc.logWrite(info);
	}

}
