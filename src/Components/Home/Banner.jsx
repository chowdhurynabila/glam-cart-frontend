const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/flat-lay-with-woman-fashion-accessories-yellow-color-orange-leather-textured-wall-fashion-online-beauty-blog-summer-style-shopping-trends-concept_72402-4405.jpg?uid=R173936001&ga=GA1.1.967247653.1701322851)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-end items-end justify-end">
        <div className="max-w-md  ">
          <h1 className="mb-5 text-5xl font-bold ">Accessorize Your Way to Glam!</h1>
          <p className="mb-5">
          Discover unique pieces that elevate your style and sparkle every day. Shop rings, necklaces, bags & more – all with a touch of chic elegance.
          </p>
          <button className="btn btn-success">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
