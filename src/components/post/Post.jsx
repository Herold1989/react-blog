import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"         
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr/>
        <span className="postDate">
            1 hour ago
        </span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, optio distinctio deleniti quaerat id velit, autem hic architecto rem sit saepe laborum ipsam eius explicabo nesciunt aperiam natus ipsum a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, optio distinctio deleniti quaerat id velit, autem hic architecto rem sit saepe laborum ipsam eius explicabo nesciunt aperiam natus ipsum a.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, optio distinctio deleniti quaerat id velit, autem hic architecto rem sit saepe laborum ipsam eius explicabo nesciunt aperiam natus ipsum a. </p>
    </div>
  )
}
