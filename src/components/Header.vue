<template>
  <header id="home">
    <div id="landing-header">
      <div className="header">
        <h1>PROFESSIONAL</h1>
        <h1>SERVICES</h1>
        <h1>FOR YOU</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
          eveniet.
        </p>
        <a href="#our-services" className="btn btn-primary">
          About us
        </a>
        <a href="#our-services" className="btn btn-secondary">
          Our Services
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background: rgb(14, 36, 0);
  background: linear-gradient(
    90deg,
    rgba(14, 36, 0, 0.5746673669467788) 0%,
    rgba(97, 245, 146, 1) 0%,
    rgba(50, 247, 198, 1) 48%,
    rgba(44, 247, 205, 1) 54%,
    rgba(0, 249, 255, 1) 100%
  );
  background: url("https://images.unsplash.com/photo-1587089879249-87bf7d2972df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
#landing-header {
  width: 100%;
  background: #000000a6;
  height: calc(100vh - 36px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}
#landing-header .header {
  margin-left: 15vw;
}
.header h1 {
  font-size: 3rem;
  font-family: "Abel", sans-serif;
  color: var(--primary);
  margin: 0.7rem 0;
}
.header p {
  width: 65%;
  color: #fff;
  margin: 0.7rem 0;
}
.header .btn {
  font-family: "Abel", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: capitalize;
  display: inline-block;
  padding: 0.3rem 0.5rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  border: none;
  border-radius: 3px;
}
.btn.btn-primary {
  color: var(--dark);
  background: var(--primary);
  border: 1px solid var(--primary);
}
.btn.btn-secondary {
  color: var(--dark);
  background: var(--secondary);
  border: 1px solid var(--secondary);
}
.btn.btn-primary:hover {
  background: none;
  border-radius: 3px;
  color: var(--primary);
  border: 1px solid var(--primary);
}
.btn.btn-secondary:hover {
  background: none;
  border-radius: 3px;
  color: var(--secondary);
  border: 1px solid var(--secondary);
}
/* Media Queries */
@media screen and (max-width: 728px) {
  #landing-header .header {
    text-align: center;
    margin: 0 auto;
  }
  .header p {
    display: none;
  }
}
@media screen and (max-width: 520px) {
  .header h1 {
    font-size: 2rem;
  }
}
</style>
