package com.example.demo;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // In-memory authentication for Admin
        auth.inMemoryAuthentication()
            .withUser("admin")
            .password("{noop}adminpass")
            .roles("ADMIN");

        // Database authentication for Recruiters and Candidates
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
            .antMatchers("/admin/**").hasRole("ADMIN")
            .antMatchers("/recruiter/**").hasRole("RECRUITER")
            .antMatchers("/candidate/**").hasRole("CANDIDATE")
            .and()
            .formLogin()
            .and()
            .logout();
    }
}
