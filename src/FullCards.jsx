import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { toJpeg } from "html-to-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faUserDoctor,
  faPhone,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function FullCard() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [tag, setTag] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [nameColor, setNameColor] = useState("");
  const pictureRef = useRef(null);
  const downloadRef = useRef();
  const [tagColor, setTagColor] = useState("");
  const [tagBGColor, setTagBGColor] = useState("");
  const [section1Color, setSection1Color] = useState("");
  const [section2Color, setSection2Color] = useState("");
  const [bioColor, setBioColor] = useState("");
  const [bioBGColor1, setBioBGColor1] = useState("");
  const [bioBGColor2, setBioBGColor2] = useState("");
  const [linksColor, setLinksColor] = useState("");
  const [skillsColor, setSkillsColor] = useState("");
  const [skillsBGColor1, setSkillsBGColor1] = useState("");
  const [skillsBGColor2, setSkillsBGColor2] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePicture(e) {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setPicture(reader.result);
      };

      reader.readAsDataURL(imgFile);
    }
  }

  function handleTag(e) {
    setTag("@" + e.target.value);

    if (e.target.value === "") setTag(e.target.value);
  }

  function handleWebsite(e) {
    setWebsite(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleJob(e) {
    setJob(e.target.value);
  }

  function handleBio(e) {
    setBio(e.target.value);
  }

  function handleSkills(e) {
    setSkills(e.target.value);
  }

  function handleInstagram(e) {
    setInstagram(e.target.value);
  }

  function handleTwitter(e) {
    setTwitter(e.target.value);
  }

  function handleYoutube(e) {
    setYoutube(e.target.value);
  }

  function handleColor1(e) {
    setColor1(e.target.value);
  }

  function handleColor2(e) {
    setColor2(e.target.value);
  }

  function handleNameColor(e) {
    setNameColor(e.target.value);
  }

  function handleTagColor(e) {
    setTagColor(e.target.value);
  }

  function handleTagBGColor(e) {
    setTagBGColor(e.target.value);
  }

  function handleSection1Color(e) {
    setSection1Color(e.target.value);
  }

  function handleSection2Color(e) {
    setSection2Color(e.target.value);
  }

  function handleBioColor(e) {
    setBioColor(e.target.value);
  }

  function handleBioBGColor1(e) {
    setBioBGColor1(e.target.value);
  }

  function handleBioBGColor2(e) {
    setBioBGColor2(e.target.value);
  }

  function handleLinksColor(e) {
    setLinksColor(e.target.value);
  }

  function handleSkillsColor(e) {
    setSkillsColor(e.target.value);
  }

  function handleSkillsBGColor1(e) {
    setSkillsBGColor1(e.target.value);
  }

  function handleSkillsBGColor2(e) {
    setSkillsBGColor2(e.target.value);
  }

  function handleDownloadPNG() {
    if (downloadRef.current === null) return;

    const element = downloadRef.current;
    if (!element) return;
    const cardShadow = element.style.boxShadow;
    element.style.boxShadow = "none";

    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "profile-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed:", err);
      })
      .finally(() => {
        element.style.boxShadow = cardShadow;
      });
  }

  function handleDownloadJPEG() {
    if (downloadRef.current === null) return;

    const element = downloadRef.current;
    if (!element) return;
    const cardShadow = element.style.boxShadow;
    element.style.boxShadow = "none";

    toJpeg(element, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "profile-card.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed:", err);
      })
      .finally(() => {
        element.style.boxShadow = cardShadow;
      });
  }

  function eraseAll() {
    if (pictureRef.current) pictureRef.current.value = null;
    setName("");
    setPicture(null);
    setTag("");
    setWebsite("");
    setEmail("");
    setNumber("");
    setLocation("");
    setJob("");
    setBio("");
    setSkills("");
    setInstagram("");
    setTwitter("");
    setYoutube("");
    setColor1("");
    setColor2("");
    setNameColor("");
    setTagColor("");
    setTagBGColor("");
    setSection1Color("");
    setSection2Color("");
    setBioColor("");
    setBioBGColor1("");
    setBioBGColor2("");
    setLinksColor("");
    setSkillsColor("");
    setSkillsBGColor1("");
    setSkillsBGColor2("");
  }

  return (
    <div className="full">
      <div className="top-logo">
        <h1>
          Profile Card
          <br />
          Generator
        </h1>
        <hr />
      </div>

      <div className="card">
        <h2>Create Card:</h2>

        <div className="card-container-2">
          <input
            type="text"
            placeholder="Name"
            id="nameInput"
            value={name}
            onChange={handleName}
          />
          <div className="name-color">
            <input type="color" value={nameColor} onChange={handleNameColor} />
          </div>
          <hr />

          <div className="picture-and-tag-input">
            <p>Upload Profile Picture:</p>
            <input
              type="file"
              accept="image/*"
              ref={pictureRef}
              onChange={handlePicture}
            />

            <input type="text" placeholder="@" onChange={handleTag} />

            <div className="tag-color-picker">
              <div className="tag-color">
                <input
                  type="color"
                  value={tagColor}
                  onChange={handleTagColor}
                />
              </div>
              <div className="tag-bg-color">
                <input
                  type="color"
                  value={tagBGColor}
                  onChange={handleTagBGColor}
                />
              </div>
            </div>
          </div>
          <hr />

          <div className="url-section-input">
            <input
              type="url"
              placeholder="Website"
              value={website}
              onChange={handleWebsite}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <br />
            <input
              type="tel"
              placeholder="+1 (407) 123-4567"
              value={number}
              onChange={handleNumber}
            />
          </div>

          <div className="section-1-color">
            <input
              type="color"
              value={section1Color}
              onChange={handleSection1Color}
            />
          </div>
          <hr />

          <div className="location-and-job-input">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={handleLocation}
            />
            <input
              type="text"
              placeholder="Job"
              value={job}
              onChange={handleJob}
            />
          </div>

          <div className="section-2-color">
            <input
              type="color"
              value={section2Color}
              onChange={handleSection2Color}
            />
          </div>
          <hr />

          <textarea
            placeholder="Bio"
            className="bio-input"
            rows="3"
            value={bio}
            onChange={handleBio}
          ></textarea>

          <div className="bio-colors-section">
            <div className="bio-color">
              <input type="color" value={bioColor} onChange={handleBioColor} />
            </div>
            <div className="bio-bg-color-1">
              <input
                type="color"
                value={bioBGColor1}
                onChange={handleBioBGColor1}
              />
            </div>
            <div className="bio-bg-color-2">
              <input
                type="color"
                value={bioBGColor2}
                onChange={handleBioBGColor2}
              />
            </div>
          </div>
          <hr />

          <div className="social-icons-selection">
            <p>Add Instragram?</p>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <input type="text" value={instagram} onChange={handleInstagram} />

            <p>Add X/Twitter?</p>
            <span>
              <FontAwesomeIcon icon={faXTwitter} />
            </span>
            <input type="text" value={twitter} onChange={handleTwitter} />

            <p>Add Youtube?</p>
            <span>
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <input type="text" value={youtube} onChange={handleYoutube} />
          </div>

          <div className="links-color">
            <input
              type="color"
              value={linksColor}
              onChange={handleLinksColor}
            />
          </div>
          <hr />

          <textarea
            placeholder="Skills"
            className="skills-input"
            value={skills}
            onChange={handleSkills}
          ></textarea>

          <div className="skills-colors-section">
            <div className="skills-color">
              <input
                type="color"
                value={skillsColor}
                onChange={handleSkillsColor}
              />
            </div>
            <div className="skills-bg-color-1">
              <input
                type="color"
                value={skillsBGColor1}
                onChange={handleSkillsBGColor1}
              />
            </div>
            <div className="skills-bg-color-2">
              <input
                type="color"
                value={skillsBGColor2}
                onChange={handleSkillsBGColor2}
              />
            </div>
          </div>
          <hr />

          <div className="bg-color">
            <p>Background Color 1:</p>
            <input type="color" value={color1} onChange={handleColor1} />
          </div>
          <div className="bg-color">
            <p>Background Color 2:</p>
            <input type="color" value={color2} onChange={handleColor2} />
          </div>

          <p className="erase" onClick={eraseAll}>
            <FontAwesomeIcon icon={faEraser} />
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Generated Profile Card:</h2>

        <div
          className="card-container-1"
          ref={downloadRef}
          style={{
            background: `linear-gradient(135deg, ${color1}, ${color2})`,
          }}
        >
          <h3
            className="card-title"
            style={{
              color: `${nameColor}`,
            }}
          >
            {name}
          </h3>

          <div className="picture-and-tag">
            {picture && <img className="picture-preview" src={picture} />}
            {tag && (
              <p
                className="tag"
                style={{
                  color: tagColor,
                  backgroundColor: tagBGColor,
                }}
              >
                {tag}
              </p>
            )}
          </div>

          <div className="url-section">
            {website && (
              <p
                style={{
                  color: section1Color,
                }}
              >
                <FontAwesomeIcon icon={faLink} /> {website}
              </p>
            )}
            {email && (
              <p
                style={{
                  color: section1Color,
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} /> {email}
              </p>
            )}
            {number && (
              <p
                style={{
                  color: section1Color,
                }}
              >
                <FontAwesomeIcon icon={faPhone} /> {number}
              </p>
            )}
          </div>

          <div className="location-and-job">
            {location && (
              <p
                style={{
                  color: section2Color,
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} /> {location}
              </p>
            )}
            {job && (
              <p
                style={{
                  color: section2Color,
                }}
              >
                <FontAwesomeIcon icon={faUserDoctor} /> {job}
              </p>
            )}
          </div>

          {bio && (
            <p
              className="bio"
              style={{
                color: bioColor,
                background: `linear-gradient(${bioBGColor1}, ${bioBGColor2})`,
              }}
            >
              {bio}
            </p>
          )}

          <div className="social-icons">
            {instagram && (
              <p
                className="instagram-link"
                style={{
                  color: linksColor,
                }}
              >
                <FontAwesomeIcon icon={faInstagram} /> {instagram}
              </p>
            )}
            {twitter && (
              <p
                className="twitter-link"
                style={{
                  color: linksColor,
                }}
              >
                <FontAwesomeIcon icon={faXTwitter} /> {twitter}
              </p>
            )}
            {youtube && (
              <p
                className="youtube-link"
                style={{
                  color: linksColor,
                }}
              >
                <FontAwesomeIcon icon={faYoutube} /> {youtube}
              </p>
            )}
          </div>

          {skills && (
            <div
              className="skills"
              style={{
                color: skillsColor,
                background: `linear-gradient(${skillsBGColor1}, ${skillsBGColor2})`,
              }}
            >
              <p>Skills:</p>
              {skills}
            </div>
          )}
        </div>

        <div className="picture-downloads">
          <p>Download:</p>
          <button onClick={handleDownloadPNG}>PNG</button>
          <button onClick={handleDownloadJPEG}>JPEG</button>
        </div>
      </div>
    </div>
  );
}

export default FullCard;
