
/* chỉnh sửa cmtcmt
router.put("/:photoId/comment/:commentId", verifyToken, async (req, res) => {
  const { photoId, commentId } = req.params;
  const { newComment } = req.body;
  const userId = req.user_id; 

  try {
    const photo = await Photo.findById(photoId);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    const comment = photo.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

   
    if (comment.user_id.toString() !== userId) {
      return res.status(403).json({ message: "Permission denied" });
    }

    comment.comment = newComment;
    await photo.save();
    res.json({ message: "Comment updated" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});




//xóa cmt
router.delete("/:photoId/comment/:commentId", verifyToken, async (req, res) => {
  const { photoId, commentId } = req.params;
  const userId = req.user_id;

  try {
    const photo = await Photo.findById(photoId);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    const comment = photo.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    // Kiểm tra quyền xóa: chỉ xóa được comment của chính mình
    if (comment.user_id.toString() !== userId) {
      return res.status(403).json({ message: "Permission denied" });
    }

    // Cách xóa đúng: dùng pull()
    photo.comments.pull(commentId);
    await photo.save();

    return res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

//#endregion

// xóa ảnh 
router.delete("/:photoId", verifyToken, async (req, res) => {
  const { photoId } = req.params;
  const userId = req.user_id;

  try {
    const photo = await Photo.findById(photoId);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    if (photo.user_id.toString() !== userId) {
      return res.status(403).json({ message: "Permission denied" });
    }

    await photo.deleteOne();
    res.json({ message: "Photo deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

//#endregion

*/

/* liệt kêkê
router.get("/users-with-many-photos", verifyToken, async (req, res) => {
  try {
    const results = await Photo.aggregate([
      { $group: { _id: "$user_id", count: { $sum: 1 } } },
      { $match: { count: { $gte: 2 } } },
      {
        $lookup: {
          from: "users", 
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      { $unwind: "$user" },
      {
        $project: {
          _id: "$user._id",
          first_name: "$user.first_name",
          last_name: "$user.last_name"
        }
      }
    ]);

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
*/
//#region edit info
/*
router.put("/:userId", verifyToken, async (req, res) => {
  const  { userId }  = req.params;
  const { first_name, last_name, location, description, occupation } = req.body;

  // Kiểm tra quyền
  if (req.user_id !== userId) {
    return res.status(403).json({ message: "Permission denied" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { first_name, last_name, location, description, occupation },
      { new: true }
    );
    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
*/
//#endregion
