const Note = require("../models/Note");

// get all the notes
exports.getNotes = async (req, res) => {
  try {
    // console.log(req.body);
    console.log("Execution started");

    let notes = await Note.find();
    console.log(notes);

    console.log("Execution end");

    res.status(200).json({ status: true, data: notes, error: "" });
  } catch (error) {
    res.status(500).json({ status: false, data: "", error: error.message });
  }
};

//add notes
exports.addNotes = async (req, res) => {
  try {
    console.log("Execution started");
    const { title, desc } = req.body;
    console.log(req.body)
    let notes = new Note({ title: title, desc: desc });
    if (notes) {
      await notes.save()
      res.status(200).json({ status: true, data: notes, error: "" });
    } else {
      res.status(200).json({ status: false, data: "", error: "" });
    }
  } catch (error) {
    res.status(500).json({ status: false, data: "", error: error.message });
  }
};

// delete notes
exports.deleteNote = async (req, res) => {
  try {
    console.log("Execution started");
    const { id } = req.params;
    let notes = await Note.findByIdAndDelete(id);
    if (notes) {
      res
        .status(200)
        .json({ status: true, data: "Notes has been deleted", error: "" });
    } else {
      res
        .status(200)
        .json({ status: false, data: "Notes has not been found", error: "" });
    }
  } catch (error) {
    res.status(500).json({ status: false, data: "", error: error.message });
  }
};
