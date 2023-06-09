import { useState } from "react";
import Header from "../../components/layouts/Header";
import { Grid, Box, TextField, Button, Alert, AlertTitle } from "@mui/material";
import emailjs from "emailjs-com";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const [formError, setFormError] = useState(false);
  const [formConfirmed, setFormConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormData = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setFormError(true);
      return;
    }

    // PUT KEYS IN .ENV
    emailjs
      .sendForm(
        "service_z5zm70b",
        "template_khh961z",
        e.target,
        "BiycPLJGiY8OAfG2H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormError(false);
    setFormConfirmed(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Grid container spacing={3}>
      <Header title={"CONTACT ME"} progressValue={50} />

      {/* LEFT COLUMN */}
      <Grid item xs={12} sm={10} md={6} lg={6} mt={2}>
        <h2 style={{ color: "white", fontWeight: 400, fontSize: "25px" }}>
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <Box sx={{ color: "#fff" }}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              error={formError}
              onChange={handleFormData}
              sx={{
                width: "100%",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a4acc4",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#fff",
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
              }}
            />
          </Box>
          <Box>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              error={formError}
              type="email"
              onChange={handleFormData}
              sx={{
                width: "100%",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a4acc4", // Change this to the desired border color
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#fff",
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
              }}
            />
          </Box>
          <Box>
            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              value={formData.subject}
              error={formError}
              onChange={handleFormData}
              sx={{
                width: "100%",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a4acc4", // Change this to the desired border color
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#fff",
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
              }}
            />
          </Box>
          <Box>
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              value={formData.message}
              error={formError}
              multiline
              rows={4}
              onChange={handleFormData}
              sx={{
                width: "100%",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a4acc4", // Change this to the desired border color
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#fff",
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
              }}
            />
          </Box>
          {formError && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Please fill the entire form out.
            </Alert>
          )}
          {formConfirmed && (
            <Alert severity="success">
              <AlertTitle>Form Sent</AlertTitle>
              Will be in contact shortly!
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Mail
          </Button>
        </form>
      </Grid>

      {/* RIGHT COLUMN */}
      <Grid item xs={12} sm={10} md={6} lg={6} mt={10}>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            background: "rgb(25,29,43)",
          }}
          mb={3}
        >
          <Box
            ml={3}
            sx={{ padding: "1rem", border: "1px solid grey", width: "7%" }}
          >
            <LocalPhoneIcon sx={{ fontSize: "2rem", color: "grey" }} />
          </Box>
          <Box m={2}>
            <p style={{ color: "#fff", fontSize: "18px", fontWeight: 500 }}>
              Phone
            </p>
            <p style={{ color: "#a4acc4" }}>+012-3456-7891</p>
            <p style={{ color: "#a4acc4" }}>+012-3456-7891</p>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            background: "rgb(25,29,43)",
          }}
          mb={3}
        >
          <Box
            ml={3}
            sx={{ padding: "1rem", border: "1px solid grey", width: "7%" }}
          >
            <EmailIcon sx={{ fontSize: "2rem", color: "grey" }} />
          </Box>
          <Box m={2}>
            <p style={{ color: "#fff", fontSize: "18px", fontWeight: 500 }}>
              Email
            </p>
            <p style={{ color: "#a4acc4" }}>marquessmalley@gmail.com</p>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            background: "rgb(25,29,43)",
          }}
          mb={3}
        >
          <Box
            ml={3}
            sx={{ padding: "1rem", border: "1px solid grey", width: "7%" }}
          >
            <LocationOnIcon sx={{ fontSize: "2rem", color: "grey" }} />
          </Box>
          <Box m={2}>
            <p style={{ color: "#fff", fontSize: "18px", fontWeight: 500 }}>
              Address
            </p>
            <p style={{ color: "#a4acc4" }}>Grand Rapids, MI</p>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
