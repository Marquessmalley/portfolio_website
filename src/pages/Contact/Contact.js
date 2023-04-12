import { useState } from "react";
import Header from "../../components/layouts/Header";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
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
  };
  console.log(formData);

  return (
    <Grid container spacing={4}>
      <Header title={"CONTACT ME"} progressValue={50} />

      {/* LEFT COLUMN */}
      <Grid xs={12} sm={6} md={6} lg={6} item mt={10}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ color: "#fff" }}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              required
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
              type="email"
              required
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
              required
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
              multiline
              rows={4}
              required
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
          <Button type="submit" variant="contained" color="primary">
            Send Mail
          </Button>
        </form>
      </Grid>

      {/* RIGHT COLUMN */}
      <Grid xs={12} sm={6} md={6} lg={6} item mt={10}>
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
          <Box m={5}>
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
          <Box m={5}>
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
          <Box m={5}>
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
