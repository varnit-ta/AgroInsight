<br/>
<p align="center">
  <a href="https://github.com/varnit-ta/AgroInsight">
    <img src="https://github.com/varnit-ta/AgroInsight/blob/main/Frontend/src/assets/logo.png?raw=true" alt="Logo" width="80" height="75">
  </a>

  <h3 align="center">AgroInsight</h3>

  <p align="center">
    A tool to scan crops and predict healthy crops, crop rust, or powdery mildews.
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/varnit-ta/AgroInsight?color=dark-green) ![Forks](https://img.shields.io/github/forks/varnit-ta/AgroInsight?style=social) ![Repository Views](https://komarev.com/ghpvc/?username=varnit-ta&label=Repository+Views&color=brightgreen)

## About The Project

AgroInsight is a practical solution designed to streamline crop monitoring processes. Our platform utilizes image analysis to assess crop health, providing insights into conditions such as crop rust or powdery mildew. With a user-friendly and responsive website, AgroInsight ensures accessibility across various devices, offering a straightforward interface for easy navigation.

**Key Features:**
- **Responsive Design:** Our website is designed to adapt to different screen sizes, allowing users to access the platform conveniently from any device.
- **Intuitive Interface:** Featuring a simple and straightforward design, AgroInsight prioritizes user experience, making it easy for individuals to navigate and utilize the platform effectively.

## Built With

- **Frontend:** 
  - **React.js:** A JavaScript library for building user interfaces, providing a fast and efficient way to create interactive components.
  - **HTML/CSS:** Standard markup and styling languages used to structure and design the website, ensuring a visually appealing and intuitive user experience.

- **Backend:**
  - **Node.js:** A JavaScript runtime environment that allows for server-side scripting, enabling the backend logic of AgroInsight to be written in JavaScript.
  - **Express.js:** A minimalist web application framework for Node.js, utilized to handle routing and middleware integration, ensuring smooth communication between the client and server.
  - **MongoDB:** A NoSQL database used to store and manage data related to user accounts, crop images, and prediction results, providing scalability and flexibility for AgroInsight's data needs.
  - **FastAPI:** A modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints, ensuring efficient communication between the frontend and the neural model.

- **Authentication:**
  - **JavaScript Web Tokens (JWT):** A secure method for authentication, employed to manage user logins and signups, ensuring data privacy and secure access to AgroInsight's features.

- **Machine Learning:**
  - **TensorFlow:** An open-source machine learning framework developed by Google, utilized to build and train the neural network responsible for analyzing crop images and making predictions about their health status, including detecting crop rust or powdery mildew.

AgroInsight leverages a combination of powerful technologies and frameworks to deliver a seamless user experience while providing accurate and reliable insights into crop health. From frontend design to backend functionality and machine learning capabilities, each component plays a crucial role in the overall functionality and success of the platform.

## Getting Started

1. **Clone Repository:** 
   Clone the AgroInsight repository from GitHub and navigate to the project directory.

2. **Install Dependencies:** 
   Navigate to the "Frontend" and "Backend" directories and run `npm install` to install the dependencies.

3. **Set Up Environment:** 
   Configure environment variables in the `.env` file following the provided template.
   - **In the backend:** Add a `MONGO_URI`, `PORT` (assume 5000), and a `SECRET` (for JWT verification).
   - **In the frontend:** Add the `BACKEND_URI` (address and port of the backend server) and `MODEL_URI` (address and port of the python model server).

4. **Start Servers:**
   - **Starting backend:** Launch the backend server with `node server` in the "Backend" directory. If you have nodemon installed, run `nodemon server` for automatic restarts on file changes.
   - **Starting frontend:** Launch the frontend server with `npm run dev` in the "Frontend" directory.
   - **Starting the Python server:** Start the Python server containing the neural model by running `uvicorn main:app --reload --port 8000`.

5. **Explore Application:** 
   Access AgroInsight to begin exploring and customizing the application for your crop monitoring needs.

> [!NOTE]
> **Note:** Before running the project, ensure that you have all necessary dependencies installed and configured according to the instructions provided in the "Getting Started" section.

> [!TIP]
> **Tip:** For the best experience, consider running the project on a modern web browser such as Google Chrome or Mozilla Firefox.

> [!IMPORTANT]
> **Important:** Make sure to set up the environment variables correctly in the `.env` file before starting the backend and frontend servers.

> [!WARNING]
> **Warning:** Running the project without proper configuration or environment setup may result in unexpected errors or incomplete functionality.

> [!CAUTION]
> **Caution:** Be cautious when modifying sensitive configuration settings or environment variables, as incorrect changes could lead to security vulnerabilities or data loss.


## Acknowledgements

- [Varnit Singh](https://github.com/varnit-ta)
- [Utkarsh Gupta](https://github.com/utkarsh369gupta)
- [Tanishq Srivastava](https://github.com/TanishqSrivastava)
