# Project Requirements

## 2. List of Requirements

### Functional Requirements (FR)

| ID | Requirement |
| :--- | :--- |
| FR1 | The system shall allow new users to create an account. |
| FR2 | The system shall automatically send a confirmation email to the user's email address upon registration. |
| FR3 | The system shall allow existing users to log in (authorize). |
| FR4 | The system shall allow users to manage their profile. |
| FR5 | The system shall allow users to optionally change their avatar and username. |
| FR6 | The system shall allow users to optionally change their password. |
| FR7 | The system shall send an email with a reset link when the user requests a password change. |
| FR8 | The system shall allow users to search for and find tests. |
| FR9 | The system shall allow users to take a selected test. |
| FR10 | Taking a test shall require the user to answer questions. |
| FR11 | The system shall support various answer types: single-choice, multiple-choice, free-text, and relevance (matching). |
| FR12 | The system shall allow users to view their results after completing a test. |
| FR13 | The system shall allow users to rate a test. |
| FR14 | The system shall allow users to write a text review for a quiz. |
| FR15 | The system shall allow users to view reviews left by others. |
| FR16 | The system shall allow users to bookmark tests and view their list of bookmarked tests. |
| FR17 | The system shall allow Authors to create a new test. |
| FR18 | Creating a test shall require adding questions and their respective answer options. |
| FR19 | Creating a test shall require filling in its details (e.g., title, description). |
| FR20 | The system shall allow Authors to create various types of questions (single-choice, etc.). |
| FR21 | The system shall allow Authors to edit test details. |
| FR22 | The system shall allow Authors to delete their own tests. |
| FR23 | The system shall allow Authors to edit questions within their tests. |
| FR24 | The system shall allow Authors to delete questions from their tests. |
| FR25 | The system shall allow Authors to view the results of all users who took their tests. |

### Non-Functional Requirements (NFR)

| ID | Requirement | Type |
| :--- | :--- | :--- |
| NFR1 | All user passwords must be stored in the database in a hashed format (e.g., SHA-256). | Security |
| NFR2 | A test page containing 50 questions must load in under 3 seconds. | Performance |
| NFR3 | The system must have an intuitive user interface for both taking tests and creating questions. | Usability |
| NFR4 | The system shall be available 99.9% of the time (uptime). | Reliability |
| NFR5 | The web interface must render correctly on the latest stable versions of Chrome, Firefox, and Safari. | Compatibility |
| NFR6 | The email service must use a secure protocol (e.G., TLS) for sending emails. | Security |
