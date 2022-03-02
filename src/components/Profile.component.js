import React, { useState, useEffect } from "react";
import { getProfileInfo } from "../services/data.service";

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    setProfile(await getProfileInfo());
  }, []);

  const profileRows = [
    {
      label: "First name",
      value: profile.firstName
    },
    {
      label: "Last name",
      value: profile.lastName
    },
    {
      label: "Phone",
      value: profile.phone
    },
    {
      label: "Email",
      value: profile.email
    },
    {
      label: "Bio",
      value: profile.bio,
      renderAsParagraph: true
    }
  ];

  function renderSingleProfileRow({ label, value, renderAsParagraph }) {
    return (
      <div key={label} className="row single-profile-row">
        <div className="col-xs-2 label">{label}</div>
        <div className="col-xs-10 value">
          {renderAsParagraph ? <p>{value}</p> : value}
        </div>
      </div>
    );
  }

  const ProfileRows = () => profileRows.map(renderSingleProfileRow);

  return (
    <section className="profile-container">
      <div className="row">
        <div className="col-sm-4 col-xs-12">
          <img
            className="profile-image"
            src={profile.avatarImage}
            alt={`${profile.firstName} ${profile.lastName}`}
            title={`${profile.firstName} ${profile.lastName}`}
          />
        </div>
        <div className="col-xs-12 col-sm-8">
          <ProfileRows />
        </div>
      </div>
    </section>
  );
}

export default Profile;
