# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> login with valid user
- Location: src\tests\auth.setup.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "/mnjuser/profile" until "load"
  navigated to "https://www.naukri.com/nlogin/login"
  navigated to "https://www.naukri.com/nlogin/login"
  navigated to "https://www.naukri.com/nlogin/login"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - img
  - img
  - generic [ref=e5]:
    - link "Naukri Logo" [ref=e6] [cursor=pointer]:
      - /url: https://www.naukri.com
      - img "Naukri Logo" [ref=e7]
    - navigation:
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Jobs" [ref=e10] [cursor=pointer]:
            - /url: https://www.naukri.com
            - generic [ref=e11]: Jobs
          - generic:
            - list:
              - listitem:
                - generic: Popular categories
              - listitem:
                - link "IT jobs":
                  - /url: https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: IT jobs
              - listitem:
                - link "Sales jobs":
                  - /url: https://www.naukri.com/sales-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Sales jobs
              - listitem:
                - link "Marketing jobs":
                  - /url: https://www.naukri.com/marketing-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Marketing jobs
              - listitem:
                - link "Data Science jobs":
                  - /url: https://www.naukri.com/data-science-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Data Science jobs
              - listitem:
                - link "HR jobs":
                  - /url: https://www.naukri.com/hr-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: HR jobs
              - listitem:
                - link "Engineering jobs":
                  - /url: https://www.naukri.com/engineering-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Engineering jobs
            - list:
              - listitem:
                - generic: Jobs in demand
              - listitem:
                - link "Fresher jobs":
                  - /url: https://www.naukri.com/fresher-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Fresher jobs
              - listitem:
                - link "MNC jobs":
                  - /url: https://www.naukri.com/mnc-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: MNC jobs
              - listitem:
                - link "Remote jobs":
                  - /url: https://www.naukri.com/remote-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Remote jobs
              - listitem:
                - link "Work from home jobs":
                  - /url: https://www.naukri.com/work-from-home-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Work from home jobs
              - listitem:
                - link "Walk-in jobs":
                  - /url: https://www.naukri.com/walkin-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Walk-in jobs
              - listitem:
                - link "Part-time jobs":
                  - /url: https://www.naukri.com/part-time-jobs?src=gnbjobs_homepage_srch
                  - generic:
                    - generic:
                      - generic: Part-time jobs
            - list:
              - listitem:
                - generic: Jobs by location
              - listitem:
                - link "Jobs in Delhi":
                  - /url: https://www.naukri.com/jobs-in-delhi-ncr
                  - generic:
                    - generic:
                      - generic: Jobs in Delhi
              - listitem:
                - link "Jobs in Mumbai":
                  - /url: https://www.naukri.com/jobs-in-mumbai
                  - generic:
                    - generic:
                      - generic: Jobs in Mumbai
              - listitem:
                - link "Jobs in Bangalore":
                  - /url: https://www.naukri.com/jobs-in-bangalore
                  - generic:
                    - generic:
                      - generic: Jobs in Bangalore
              - listitem:
                - link "Jobs in Hyderabad":
                  - /url: https://www.naukri.com/jobs-in-hyderabad-secunderabad
                  - generic:
                    - generic:
                      - generic: Jobs in Hyderabad
              - listitem:
                - link "Jobs in Chennai":
                  - /url: https://www.naukri.com/jobs-in-chennai
                  - generic:
                    - generic:
                      - generic: Jobs in Chennai
              - listitem:
                - link "Jobs in Pune":
                  - /url: https://www.naukri.com/jobs-in-pune
                  - generic:
                    - generic:
                      - generic: Jobs in Pune
        - listitem [ref=e12]:
          - link "Companies" [ref=e13] [cursor=pointer]:
            - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
            - generic [ref=e14]: Companies
          - generic:
            - list:
              - listitem:
                - generic: Explore categories
              - listitem:
                - link "Unicorn":
                  - /url: https://www.naukri.com/unicorn-companies-in-india-cat102?title=Unicorns%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Unicorn
              - listitem:
                - link "MNC":
                  - /url: https://www.naukri.com/mnc-companies-in-india-cat101?title=MNCs%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: MNC
              - listitem:
                - link "Startup":
                  - /url: https://www.naukri.com/startup-companies-in-india-cat103?title=Startups%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Startup
              - listitem:
                - link "Product based":
                  - /url: https://www.naukri.com/product-companies-in-india-cat106?title=Product%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Product based
              - listitem:
                - link "Internet":
                  - /url: https://www.naukri.com/internet-companies-in-india-cat105?title=Internet%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Internet
            - list:
              - listitem:
                - generic: Explore collections
              - listitem:
                - link "Top companies":
                  - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Top companies
              - listitem:
                - link "IT companies":
                  - /url: https://www.naukri.com/it-companies-in-india-cat116?src=gnbCompanies_homepage_srch&title=IT%20Companies%20Hiring
                  - generic:
                    - generic:
                      - generic: IT companies
              - listitem:
                - link "Fintech companies":
                  - /url: https://www.naukri.com/fintech-and-payments-companies-in-india-cat108?title=Fintech%20%26%20Payments%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Fintech companies
              - listitem:
                - link "Sponsored companies":
                  - /url: https://www.naukri.com/allcompanies?searchType=standardLogo&title=Sponsored+companies&branding=%257B%2522pagename%2522%253A%2522ni-desktop-standard-viewAll%2522%257D&pageNo=1&qcount=47&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Sponsored companies
              - listitem:
                - link "Featured companies":
                  - /url: https://www.naukri.com/allcompanies?searchType=premiumLogo&title=Featured+companies+actively+hiring&branding=%257B%2522pagename%2522%253A%2522ni-desktop-premium-viewAll%2522%257D&pageNo=1&qcount=47&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Featured companies
            - list:
              - listitem:
                - generic:
                  - text: Research companies
                  - generic: by
                  - img
                  - generic: Ambitionbox
              - listitem:
                - link "Interview questions":
                  - /url: https://www.ambitionbox.com/interviews?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
                  - generic:
                    - generic:
                      - generic: Interview questions
              - listitem:
                - link "Company salaries":
                  - /url: https://www.ambitionbox.com/salaries?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
                  - generic:
                    - generic:
                      - generic: Company salaries
              - listitem:
                - link "Company reviews":
                  - /url: https://www.ambitionbox.com/reviews?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
                  - generic:
                    - generic:
                      - generic: Company reviews
              - listitem:
                - link "Salary Calculator":
                  - /url: https://www.ambitionbox.com/salaries/take-home-salary-calculator?utm_campaign=gnb&utm_source=naukri&utm_medium=desktop
                  - generic:
                    - generic:
                      - generic: Salary Calculator
        - listitem [ref=e15]:
          - link "Services" [ref=e16] [cursor=pointer]:
            - /url: https://resume.naukri.com/?fftid=100001
            - generic [ref=e17]: Services
          - generic:
            - list:
              - listitem:
                - generic: Resume writing
              - listitem:
                - link "Text resume":
                  - /url: https://resume.naukri.com/resume-writing-services?fftid=101001
                  - generic:
                    - generic:
                      - generic: Text resume
              - listitem:
                - link "Visual resume":
                  - /url: https://resume.naukri.com/visual-resume-writing-services?fftid=101002
                  - generic:
                    - generic:
                      - generic: Visual resume
              - listitem:
                - link "Resume critique":
                  - /url: https://resume.naukri.com/resume-critique?fftid=101006
                  - generic:
                    - generic:
                      - generic: Resume critique
              - listitem:
                - generic: Find Jobs
              - listitem:
                - link "Jobs4u":
                  - /url: https://resume.naukri.com/job-alerts-on-mobile-mail?fftid=101011#jobmail
                  - generic:
                    - generic:
                      - generic: Jobs4u
              - listitem:
                - link "Priority applicant":
                  - /url: https://resume.naukri.com/priority-job-application?fftid=101019
                  - generic:
                    - generic:
                      - generic: Priority applicant
              - listitem:
                - link "Contact us":
                  - /url: https://resume.naukri.com/contact-us?fftid=101015
                  - generic:
                    - generic:
                      - generic: Contact us
            - list:
              - listitem:
                - generic: Get recruiter's attention
              - listitem:
                - link "Resume display":
                  - /url: https://resume.naukri.com/resume-display?fftid=101009
                  - generic:
                    - generic:
                      - generic: Resume display
              - listitem:
                - generic: Monthly subscriptions
              - listitem:
                - link "Basic & premium plans":
                  - /url: https://resume.naukri.com/subscription-product?fftid=101025
                  - generic:
                    - generic:
                      - generic: Basic & premium plans
            - list:
              - listitem:
                - generic: Free resume resources
              - listitem:
                - link "Resume maker":
                  - /url: https://www.naukri.com/resume-maker?utmTerm=ResumePro_Gnb&utmContent=gnbServices
                  - generic:
                    - generic:
                      - generic: Resume maker
              - listitem:
                - link "Resume quality score":
                  - /url: https://resume.naukri.com/resume-quality-score?fftid=101003
                  - generic:
                    - generic:
                      - generic: Resume quality score
              - listitem:
                - link "Resume samples":
                  - /url: https://resume.naukri.com/resume-samples?fftid=101004
                  - generic:
                    - generic:
                      - generic: Resume samples
              - listitem:
                - link "Job letter samples":
                  - /url: https://resume.naukri.com/job-letter-format
                  - generic:
                    - generic:
                      - generic: Job letter samples
    - generic [ref=e18] [cursor=pointer]:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - textbox "Enter keyword / designation / companies"
        - generic:
          - generic:
            - generic:
              - textbox "Select experience"
              - generic: 
        - generic:
          - generic:
            - generic:
              - generic:
                - textbox "Enter location"
      - generic [ref=e19]: Search jobs here
      - button "" [ref=e20]:
        - generic [ref=e21]: 
    - generic [ref=e22]:
      - link "Login" [ref=e23] [cursor=pointer]:
        - /url: https://login.naukri.com/nLogin/Login.php
      - link "Register" [ref=e24] [cursor=pointer]:
        - /url: https://www.naukri.com/registration/createAccount?othersrcp=22636
    - listitem [ref=e25]:
      - generic [ref=e27]:
        - text: For employers
        - generic [ref=e28]: 
      - generic:
        - list:
          - listitem:
            - link "Buy online":
              - /url: https://www.naukri.com/recruit/buy-resume-database-access-packages
              - generic:
                - generic:
                  - generic: Buy online
          - listitem:
            - link "Naukri Talent Cloud":
              - /url: https://www.naukritalentcloud.com?utmSource=jobseekerGNB
              - generic:
                - generic:
                  - generic: Naukri Talent Cloud
          - listitem:
            - link "Employer Login":
              - /url: https://www.naukri.com/recruit/login
              - generic:
                - generic:
                  - generic: Employer Login
  - generic [ref=e35]:
    - generic:
      - generic [ref=e36]:
        - strong [ref=e39]: New to Naukri?
        - generic [ref=e40]:
          - generic [ref=e42]:
            - emphasis [ref=e43]: check
            - text: One click apply using naukri profile.
          - generic [ref=e45]:
            - emphasis [ref=e46]: check
            - text: Get relevant job recommendations.
          - generic [ref=e48]:
            - emphasis [ref=e49]: check
            - text: Showcase profile to top companies and consultants.
          - generic [ref=e51]:
            - emphasis [ref=e52]: check
            - text: Know application status on applied jobs.
        - link "Register for Free" [ref=e55] [cursor=pointer]:
          - /url: //www.naukri.com/registration/createAccount
        - img [ref=e58]
      - generic [ref=e60]:
        - generic [ref=e61]:
          - strong [ref=e64]: Login
          - generic [ref=e65]:
            - generic [ref=e67]:
              - generic [ref=e68]: Email ID / Username
              - textbox "Enter Email ID / Username" [ref=e69]: shubhamsakhare2108@gmail.com
            - generic [ref=e71]:
              - generic [ref=e72]: Password
              - textbox "Enter Password" [active] [ref=e73]: "@#12Shubz6893"
              - generic [ref=e74] [cursor=pointer]: Show
              - link "Forgot Password?" [ref=e76] [cursor=pointer]:
                - /url: /nlogin/forgotpassword
            - generic [ref=e78]:
              - button "Login" [ref=e79] [cursor=pointer]
              - button "Use OTP to Login" [ref=e80] [cursor=pointer]
        - generic [ref=e82]:
          - generic [ref=e84]: Or
          - generic [ref=e86] [cursor=pointer]:
            - img [ref=e87]
            - generic [ref=e88]: Sign in with Google
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { login } from '../pages/login';
  3  | import user from '../testdata/user.json';
  4  | import fs from 'fs';
  5  | 
  6  | const authFile = 'auth/user.json';
  7  | 
  8  | if (!fs.existsSync('auth')) {
  9  |   fs.mkdirSync('auth');
  10 | }
  11 | 
  12 | test('login with valid user', async ({ page }) => {
  13 |   const loginPage = new login(page);
  14 |   await loginPage.navigate();
  15 |   // await loginPage.login(user.username, user.password);
> 16 |   await page.waitForURL('/mnjuser/profile');
     |              ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  17 |   await page.context().storageState({ path: authFile });
  18 | });
  19 | 
```