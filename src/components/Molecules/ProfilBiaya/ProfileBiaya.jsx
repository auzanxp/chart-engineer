import "./ProfileBiaya.css";

const ProfileBiaya = () => {
  return (
    <div className="profile__wrap">
      <div className="profile__title">Profile Biaya</div>
      <div className="row">
        <div className="col table-responsive">
          <table className="table__profile table table-dark table-borderless">
            <thead>
              <tr>
                <th scope="col">Fungsi</th>
                <th>RKAP 2021</th>
                <th>Real 2021</th>
                <th>RKAP 2022</th>
                <th>Target YTD</th>
                <th>Real YTD</th>
                <th>Monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Company A</td>
                <td>$5,08</td>
                <td>$3,40</td>
                <td className="horizontal-bar" colSpan="3">$5,48</td>
                <td>$3,40</td>
                <td>$1,53</td>
                <td>Diagram</td>
              </tr>
              <tr>
                <td>Company B</td>
                <td>$9,21</td>
                <td>$6,85</td>
                <td>$8,28</td>
                <td>$2,07</td>
                <td>$1,35</td>
                <td>Diagram</td>
              </tr>
              <tr>
                <td>Company C</td>
                <td>$9,21</td>
                <td>$6,85</td>
                <td>$8,28</td>
                <td>$2,07</td>
                <td>$1,35</td>
                <td>Diagram</td>
              </tr>
              <tr>
                <td>Company D</td>
                <td>$9,21</td>
                <td>$6,85</td>
                <td>$8,28</td>
                <td>$2,07</td>
                <td>$1,35</td>
                <td>Diagram</td>
              </tr>
              <tr>
                <td>Company E</td>
                <td>$9,21</td>
                <td>$6,85</td>
                <td>$8,28</td>
                <td>$2,07</td>
                <td>$1,35</td>
                <td>Diagram</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileBiaya;
