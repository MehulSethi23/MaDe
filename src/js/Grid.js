import "../css/grid.scss";

function Grid({ Data }) {
  return (
    <div class="gridcontainer">
      <div class="gallery">
        {Data.map((post) => {
          //mapping the data in grid format
          const { id, email, first_name, last_name, avatar } = post;
          return (
            <div key={id} class="card">
              <img src={avatar} alt="" />
              <div class="info">
                <h4 class="title">
                  {first_name} {last_name}
                </h4>
                <h5 class="title">{email}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
