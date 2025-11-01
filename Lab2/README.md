# Project Requirements

## 2. List of Requirements

### Functional Requirements (FR)

| ID | Requirement |
| :--- | :--- |
| FR1 | The system shall allow new users to create an account. |
| FR2 | The system shall automatically send a confirmation email to the user's email address upon registration. |
| FR3 | The system shall allow users to manage their profile. |
| FR4 | The system shall allow users to optionally change their avatar and username. |
| FR5 | The system shall allow users to optionally change their password. |
| FR6 | The system shall send an email with a reset link when the user requests a password change. |
| FR7 | The system shall allow users to search for and find tests. |
| FR8 | The system shall allow users to take a selected test. |
| FR9 | Taking a test shall require the user to answer questions. |
| FR10 | The system shall support various answer types: single-choice, multiple-choice, free-text, and relevance (matching). |
| FR11 | The system shall allow users to view their results after completing a test. |
| FR12 | The system shall allow users to rate a test. |
| FR13 | The system shall allow users to write a text review for a quiz. |
| FR14 | The system shall allow users to view reviews left by others. |
| FR15 | The system shall allow users to bookmark tests and view their list of bookmarked tests. |
| FR16 | The system shall allow Authors to create a new test. |
| FR17 | Creating a test shall require adding questions and their respective answer options. |
| FR18 | The system shall allow Authors to provide and later edit test details (e.g., title, description). |
| FR19 | The system shall allow Authors to create various types of questions (single-choice, multiple-choice, free-text, relevance). |
| FR20 | The system shall allow Authors to edit test details. |
| FR21 | The system shall allow Authors to delete their own tests. |
| FR22 | The system shall allow Authors to edit questions within their tests. |
| FR23 | The system shall allow Authors to delete questions from their tests. |
| FR24 | The system shall allow users to view their personal statistics and history of completed tests within their profile. |
| FR25 | The system shall allow Authors to view statistics for the tests they have created. |

### Non-Functional Requirements (NFR)

| ID | Requirement | Type |
| :--- | :--- | :--- |
| NFR1 | All user passwords must be stored in the database in a hashed format (e.g., SHA-256). | Security |
| NFR2 | A test page containing 50 questions must load in under 3 seconds. | Performance |
| NFR3 | The system must have an intuitive user interface for both taking tests and creating questions. | Usability |
| NFR4 | The system shall be available 99.9% of the time (uptime). | Reliability |
| NFR5 | The web interface must render correctly on Chrome version 141 and newer, Firefox version 143 and newer, and Safari version 18 and newer. | Compatibility |
| NFR6 | The email service must use a secure protocol (e.g., TLS) for sending emails. | Security |

***

## 3. Traceability Matrix (FR $\leftrightarrow$ UC)

**Use Case Legend:**

* **Reg:** Register
* **SendConfirm:** Send Confirmation Email
* **Profile:** Manage profile
* **ChgPass:** Change password
* **SendReset:** Send Password Reset Link
* **Find:** Find test
* **Take:** Take a test
* **Answer:** Answer the question
* **MyRes:** View your results of test
* **AllRes:** View result of all tests
* **Rate:** Rate test
* **Write:** Write text review
* **ViewRev:** View review
* **Bookmark:** Bookmark test
* **ViewBookmark:** View bookmarked tests
* **Create:** Create test
* **AddQ:** Add questions
* **AddOptions:** Add answer options
* **EditQ:** Edit question
* **DelQ:** Delete question
* **EditTest:** Edit test details
* **DelTest:** Delete test
* **ViewStats:** View test stats
  

| FR ID | Reg | SendConfirm | Profile | ChgPass | SendReset | Find | Take | Answer | MyRes | AllRes | Rate | Write | ViewRev | Bookmark | ViewBookmark | Create | AddQ | AddOptions | EditQ | DelQ | EditTest | DelTest | ViewStats |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **FR1** | X | | X | X | | | | | | | | | | | | | | | | | | | |
| **FR2** | X | X | | | | | | | | | | | | | | | | | | | | | |
| **FR3** | X | | X | | | | | | | | | | | | | | | | | | | | |
| **FR4** | X | | X | | | | | | | | | | | | | | | | | | | | |
| **FR5** | X | X | X | X | | | | | | | | | | | | | | | | | | | |
| **FR6** | | | X | X | X | | | | | | | | | | | | | | | | | | |
| **FR7** | | | | | | X | | | | | | | X | X | X | | | | | | | | |
| **FR8** | | | | | | | X | X | X | | | X | X | X | X | | | | | | | | X |
| **FR9** | | | | | | | X | X | X | | | | | | | | | | | | | | X |
| **FR10** | | | | | | | X | X | | | | | | | | X | X | X | X | | | | |
| **FR11** | | | | | | | X | X | X | | X | X | | X | X | | | | | | | | X |
| **FR12** | | | | | | | X | | X | | X | X | X | | | | | | | | | | X |
| **FR13** | | | | | | X | X | | X | | | X | X | | | | | | | | | | X |
| **FR14** | | | | | | X | X | | | | | X | X | | X | | | | | | | | |
| **FR15** | | | | | | X | | | | | | | X | X | X | | | | | | | | X |
| **FR16** | | | | | | | | | | | | | | | | X | | | | | X | X | |
| **FR17** | | | | | | | | | | | | | | | | X | X | X | | X | X | | |
| **FR18** | | | | | | | | | | | | | | | | X | X | X | X | X | X | X | |
| **FR19** | | | | | | | | | | | | | | | | X | X | X | X | X | X | | |
| **FR20** | | | | | | | | X | | | | | | | | X | X | X | X | X | X | X | |
| **FR21** | | | | | | | | | | | | | | | | X | | | | | | X | |
| **FR22** | | | | | | | | | | | | | | | | | X | X | X | X | X | | |
| **FR23** | | | | | | | | | | | | | | | | | | X | | X | X | | |
| **FR24** | X | | X | | | | | | X | X | | | | | X | X | | | | | | X | |
| **FR25** | | | | | | X | | | | X | | | | | | X | | | | | | | X |
