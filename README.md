**Portuguese Address Finder (PY)**

<img alt="screencapture" src="screen-capture.gif" />

**Overview:**
This project is aimed at enhancing proficiency in Python for web development through the creation of a web application. The application consists of a frontend developed using React with Typescript, employing the shadcn/ui library for accelerated development. Additionally, a Node.js API acts as an intermediary between the frontend and a Python-based web crawler. The crawler is designed to extract data from the website https://www.codigo-postal.pt/ utilizing the BeautifulSoup4 and Requests libraries.

**Components:**

1. **Frontend:**
   - **Framework:** React with Typescript
   - **Library:** shadcn/ui

2. **Backend/API:**
   - **Framework:** Node.js

3. **Web Crawler:**
   - **Language:** Python
   - **Libraries:** 
     - BeautifulSoup4 (4.11.1)
     - Requests (2.28.1)

**Instructions:**

1. **Setup:**
   - Clone the repository to your local machine.
   - Ensure you have Node.js and Python installed on your system.

2. **Backend/API:**
   - Navigate to the backend directory.
   - Install dependencies using `npm install`.
   - Start the server using `npm start`.

3. **Frontend:**
   - Navigate to the frontend directory.
   - Install dependencies using `npm install`.
   - Start the development server using `npm run dev`.

4. **Web Crawler:**
   - Ensure you have Python 3.5.2+ installed.
   - Navigate to the crawler directory.
   - Install dependencies using `pip3 install -r requirements.txt`.

5. **Usage:**
   - Once all components are running, access the application through the provided URL.
   - Add a valid portuguese postal code.
   - The backend/API facilitates communication between the frontend and the Python web crawler.

**Notes:**
- This project serves as a learning exercise and may be expanded or modified for further experimentation.
- Ensure proper permissions and usage policies while accessing external websites with the web crawler.
- Feel free to contribute, provide feedback, or suggest improvements.

**Disclaimer:**
This project is for educational purposes only. Respect all legal regulations and usage policies, especially when dealing with web scraping and data extraction.