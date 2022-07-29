import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="cen">
          <div className="hh">
            <h2 className="rr">WE PROMISE</h2>
            <h2 className="rrr">IMPROVEMENT IN MARKS</h2>
            <h2 className="rrrr">OR GET YOUR FEES BACk </h2>
          </div>
        </div>
        <div>
          <img
            className="im"
            src="https://play-lh.googleusercontent.com/qTO_bSnkqmPFZ8k-vTFahIFDPl_iTyos_CMHVCRLq3RD78c30rQKT7S9yEdepLrRBw"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="ptag">
          Your Child’s Academic Progress is Now OUR Responsibility
        </p>
        <div className="win">
          <p className="veb">
            At Pathshala, we believe a child’s academic progress is every
            child’s right. With the Pathshala Improvement Promise, we take
            complete ownership and accountability for your child’s progress.
            Learn more about Pathshala Improvement Promise.
          </p>
        </div>
      </div>

      <div className="div1">
        <h3 className="domo">What to expect from the Free Demo Session?</h3>
        <div className="for">
          <div className="inner">
            <img
              width="200px"
              className="len"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p className="tot">Analysis</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Broad analysis of learning gaps affecting the child’s
                performance and learning.
              </p>
            </div>
          </div>
          <div className="inner">
            <img
              width="200px"
              className="len"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p className="tot"> Special Quizzes</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Broad analysis of learning gaps affecting the child’s
                performance and learning.
              </p>
            </div>
          </div>
          <div className="inner">
            <img
              width="200px"
              className="len"
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="tot"> Advantage</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Broad analysis of learning gaps affecting the child’s
                performance and learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="our">Our Results</h3>
      <div>
        <img
          className="top"
          src="https://www.vedantu.com/seo/content-images/e1ad4ba5-9704-4eaf-92e8-977b143563ed.png"
          alt=""
        />
      </div>
      <div>
         
      </div>

      <div className="div1">
      <h2 className="ourr">Students sharing their  Pathshala Experience</h2> 
        <div className="for">
          <div className="inner">
            <img
              width="200px"
              className="len"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX+/v4dGRoAAAAXEhNHREXMzMzMyssbFxgeGBoVEBEZFBXw8PD//v4QCgw4NDULAwXT0dElJSV+e3w9PT2RjY7Gxsbq6epwb2+ioqLj4uJiYWKamZkkICGxr7AuKyz39fVZV1iDgYKgnJ3Z2Ni4uLhRUFB6dndnZWY2NjbQjxJ2AAACTElEQVR4nO3a606jUBSGYVhgK3L0ANqp9Fzr/V+hjcmoU6FlJjadb+V9f68m+8mGDSENAiIiIiIiIiIiIiKZ0tFn1aUXc46ubu2z4tKrOUN3dhN+FMWXXs6PV91bGDoWZg+WhH6F2eEG+hMebqA3YR0ebqAvYfP49Qh1KHyyssPnR1i/2rgT6EQ4+WVRt8+HMF1a3ufzIJxPo44T1JHw6bnvBnQhzNpZ5xPCjbAtTvqUhfO27D9AHQjT6e2A/dMVTu7ygT5NYb2w8vj5KS1spoXl14N9asL5ZmGDjhdR4Xo5O/Z6pi5sVoWVQ08XPWHTbv/66hQSpu0i//75xZOwsGT4s0FSGP/j5Ynw/wkhQoSXb4Aw6f4Y7Edo8ar/c5sDYWLLoHIsHFu8DoIrv8LSVlngWJjbLn2fcSqMbPv7vzIuhYkV9ceMQ2Fi8ebLjDfhOLdt/ceML2Fk5eP6YMaTsLT7VfNtxotwf3XaS5V1zMgLr/ftec+7Tc+MvDC8Kfc33ybtnREXmtnsYXR0Rlu43bWTUzPawvmAGW3hkBDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9fMvHFl/r5de3I+U1qPeqtM/JyIiIiIiIiIiIjpHb/ytKmQZ2yLxAAAAAElFTkSuQmCC  "
              alt=""
            />
            <p className="tot">Nazia</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Organic Chemistry was like a phobia to me! I couldn't even
                attempt it in competitive exams. Thank you for helping me.
                
              </p>
            </div>
          </div>
          <div className="inner">
            <img
              width="200px"
              className="len"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxURPXVaZ38bvEuGa7XAj9iryKsW3fJTZjMiJV2UBIE7tvZChMS0AyRg_67R6GX4DVWY&usqp=CAU"
              alt=""
            />
            <p className="tot">Karan Singh</p>
            <div className="bor">
              <p className="tott">
              Pathshala has provided me a very good platform for studying from
                my home .{" "}
              </p>
            </div>
          </div>
          <div className="inner">
            <img
              width="200px"
              className="len"
           src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlH2_fHd3hrlctVscTroRZcUh5CfHU1NneiKD1GBQTlcGX1I8T2ne_g9T--cSNfyl-R8&usqp=CAU"
            />
            <p className="tot">Analysis</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Broad analysis of learning gaps affecting the child’s
                performance and learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="div11">
        <div className="upper">
            <h2 className="up">Get the  Pathshala Advantage that you Deserve</h2>
            <button className="book">BOOK A FREE DEMO</button>
        </div>
        <div className="dib33">

            <h1 className="ne">Online live class</h1>
             <h1 className="ne">Doubt Solving</h1>
             <h1 className="ne">Personal Teacher</h1>
             <h1 className="ne">Test Series</h1>
        </div>
      </div>


      <div className="div1">
      <h2 className="ourr"> Meet some of our expert teachers</h2> 
        <div className="for">
          <div className="inner">
            <img
              width="200px"
              className="len"
              src=" data:image/jpeg;base64,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"
              alt=""
            />
            <p className="tot">Nazia</p>
            <p className="tot">BDS - SDM College of Dental Sciences</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Organic Chemistry was like a phobia to me! I couldn't even
                attempt it in competitive exams.    
                
              </p>
            </div>
          </div>
          <div className="inner">
            <img
              width="200px"
              className="len"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AvQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xAA8EAABAwIDBQUFBgUFAQAAAAABAAIDBBEFEiEGMUFRYQcTInGBFCORocEyM0JSsdEVQ2Ki4SQlNHLwFv/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EAB8RAQEAAgIDAQEBAAAAAAAAAAABAhEDEgQhMUETIv/aAAwDAQACEQMRAD8AdYfFmN1ZqFlgEmoYsgF08peC0KDaE2Cna5Bxu0UzXJB6pcvU7tFDUvWIJNEonfhhdevZDGVaOnHNPSAzOBxWDJ1QBqOqpe2XaThmzrpKSEOrMRaPuY/sxn+t3DyFyi6hzddB7wc1gu0Xz7W9r+0kt/Z4qGmaQNGxueR6k/RHbN9smIQTtj2hpYainOhmpmZZW9SL2d8lDvEphXa3O8Ska/RK6HEqXE6OKtoJ2T08rczJGHQ/seiKbIpQshWa63YhWPuUS1wspIt3HRDPdqpXu0QkrtUBPm8KhJ1WGyaLBdqgI60+5PkqfiI96fNW6tPuT5KnYg73p81X+p34ELQh3t8SJBuFA8+JNWsFLJmtZOIH2ASWlLWplFKDxVugZxyFEtkS1kgClbMlQmqnoeKaw3qOql0QHtFuKjEr8NX1Ou9RvqdN6TSVfi3qN1VpvUkS/tA2pfgOAudTPArak91T82n8TvQfOy4WGukd4nlzibkk6uPG/VWbtMxJ1ZtH3F7x0UQaB/U6zj9Pgs7H4IKljays0hBuM2l+qy83JMfbVw8dyuiV2A1jofaWt8HVLaiB8Rs9pa4aG67WaaF8Le7DSwbiNQqztNs8JKR0kEV3sFwAOHJY8fIy7ardl4uPXeJd2VbUSYLjDMPqJP8AQVz8uUnSOU6NcPPcfTku5iZfLTQG3LTlN/CeRX0Fs7ixxPA6GtcbumhaXf8Abc75gro8d/HM5JpaYZdUUJdN6S08pJRrXlWKhrpNEJNItJJrDegpKi5TA9r9FjvNULHJcKRmpQEtWbwHyVQxD74+at1UP9OfJVGv++Pmqv1Zfgdv2Sg5XHOjgPCg5W3emrNKaQu5pnCbAIVkAZ5KUPAFrqwDGzKZkt0r7zVExPRQnrX2jSd8xF9UwrXXjSaUm5UYlfjSaezt6wyozIeYEoGtqvZKSee9jHG5w+Cd+I/rl+PzirxXEqkG+eZ1r8gbfRdBpZDS4VTSNpxK4MY0McLht7a2XMBrC5t9SF1/Zx8dXh9O51iHRjf5Lm+VdSV1fDnuwpwepnNb3s0EUBMjm5YQ5t7cSNxB+in2ornMb3LYy9gGYtLiA/ztv8k6niYHAR/Zvq4IasjjNQ0hzX3Avbh1WPvu703Tj1NbcrxuMx1he2KOJrwHZYhZoNtQF0/swqjNs+6AuuaedzfQ2cP1SXbqlpWYQ5zGtzh7MpA43t+im7IpSTikB4OjeP7h9Aul43J3m3J8vj6ZadTpWaXRLnZQh4zkatZphbetrExUTaILvCStJ5xfehzKOaAb07/CiYzd4Senn6phTy3O9AH1Z9wfJVOsF5j5qz1Drw+irdV96fNVfqy/EIHhQUpAemFvCUtqAe8TVm4qM7dFp3hvqoqdpDVs8G6sCZr7ouEm4QMSZUsd7JU41qTZmqVS2JNk4ronZbAJfHTOcdQoypWAXxFzVWNtnOpsBqCNDIWx/E6/JdBbReDcuedrTxTUFFTXAdLMX26NH7kJZZehjPbmeawC6BsFiUctE+ikPvIScvVp3Ki0FFNiFXFTUzS6SR2VoXS6XYaowSNmIwPMrw330Y325jr0WPmx7YVu8fLrnKYte+N72VplMBt3boA0Fo5G/wCtwharu5HtZQe0tFwXSyuboL8gLI2iqYpo7vIe0t8LmoXGa2OioZHQMJeGEi+5c/tv06dknuqztrWRn2agY67s3eP14AED5/oi+yeXJi+IN/PGD8Hf5VFdPLV1UlRUyF0rtSSrr2VMMm0czL6CmeT18Tf3XU4cOkkcfnz/AKW11p83hQkkrn3tdHmlBatGUrWnVatsmieYP5KAB5O5P5aeK3BQCCIckdj60FA19homFMHXUsbImjgp4TGHaWR2HVM9p7n0SCrjdnJAVncWCL0Sipkiub2VaevRSGPtuQ8lM8uvZMnVMLeIUZrIb8E9l1ENjYOSyWR9FXX4jI3Qlbw4g92l0/Z+j5kbAeCYUzowQq1HVuvvRkNUcw1Sux6WCodHbVCd7EzVLK2tLIrkpBJiriSAfmkdq3TYnTQRvkleGMYC5zibAAbyuEbdbQf/AEWPSVUeYUsQ7qBp/KDv9Tqt9qNpKnFJpKeGVzKMG2UG3edT06Ku7lG046P2LPh9rxRkkbHShkbo3W1Au4EX+C60x7D4XaX4L5rwjGK/BpZJsMn7mR7crzlDrjfxCLqtrcfrmZJ8Wqg0fhid3QPnltf1UUnXccwRtPUyVFBlMbrufG23hPO3JVnaE/7XOT+QgJ72f41HjWGF5kHt0DQJo+JP5uoP6onazAmYts/VzYe3JVsaXujb+MDUgDnoVj5PG/12xbuLyv8APXJxOSkkZQR1YHgd4SeXAJ/sHiIoNpqSZxytmDoXHzGnzAU2MxHDNlqNnswe2pY0ukebd3fxCw9RqqoyQtfmNxrc2NrHmFrxv6x5T3p9IQ1hcNULV1xYbXK5bs/t/V0M0dNi9qmmJA7/APmMHM/m/VdJfD7XEyaF2eN7Q5jgdCDqCFfLKossCVWMZB9rclz8fAP2gtcVw2cA2uq3Jh9Tm0Dt6VokWmHHS82DlY8Je6exvvVDwvDJzIMzSuiYJTGGNoI1RsaH1d46c68FUa2pf3jrc1cq6Jz4CByVTqaBxkcbHeon+E8kzy6ygfJJfinIwxxK2OEk8EyRTYe524LEGHvB3I51c1bR1jSVIekPsTgFNTUr89lI6qFty3p6oZ9yV2NxmtoS+G3RVXHcOfTYTXVDXhhZA9wdy0Vuq62zNypm3uIZtnKiNrg3vXNb5i9yPklpK2OUlYXjqV5QSacQetis2toF5w1WSLoAzCsSq8Ir4q2gk7uaP4OHFpHEFd12RxyDaDDmVlIBFK02nhDrujdy6jkeK+fgeac7LY9UbPYtHWwFzoz4Z4h/MZy8xvHVKwOw7YYDHjGEVNOwDvCM0ZGmV4Gg+VlwbK4EseC2RpLXA8wvpKkqqevw6OrpbSQyNEjXg7wQuKdpGHx0O08skDcjKhoksPzcT67/AIoNVibt5rr3ZBj7qvD58Jq3Oe+kAfC47hEdMvof1XISfjx6p9sPi7sH2ip5B91P7iQf0u4+hsnj9K/HcsQdCb3sk0jqYHcF7EJTbRw1CRyvcTvVvVR/RZqKSAOGUBWKkmjDRZUKhkIcLlWCmq7Aao6iclWWpqGiL0SCorow4qaonzQE9FWat5MjvNKRPLKyHH8RZfRZ/iDVXQ8grfvU+qv+lS5CpIWHMm0WGPPBTMwsg6tUtwdci5zfCvU986ZSUgbodFinp2A3uEWw5jdlmKOIYNVSdsG99gsjt5ie14+NvqrtjYAaVTsZjM+HVUQ3ujdbz3hL8LL1Y51wXlnesKloalbBauWzdyA9ZYGh1WywUB1Hscx7WpwGoddpa6anv/e36/FQdr1Gxopar+bmLD5cP1VCwTEZMJxakr4j4qeVryOBHEeouF0HtfqYnUmHNhIcyocZGHm0NH7hAcuIWWuyPbIN7SCPRZXmi4I6pU47IXk0kIP5BxQTkFs3XSV2BwPl1fHeMuP4spsD8LI1y0y7jFlNVLC8ghMqeQkjVK494R0D7OA6pifVgY10lNYckoqKOQvJsnlDK1sIvyQ89bA1xBsqt+2iyWEhoZeSjdRS33FNXYlAOSjOJwc0+yHWLuxsXCy2mYBHcAJJT1Ty4XTlri6nJPJQaVQx6vMLyBogKDE3vfa69tR9+7zS7CR4gpyelGWX+hmMTlzbpC43Nim+K7knUsVfJ9c8r6c0tbPARbI8geXD5WQ6f7X04ZWQztP3rLEdW8fmkKpymqvxu5sy2Zjglx+hZVRtliLyTG/c6zSQD0vZA17O4xCpiyZGiR2VvIX0WsMz6eVk8Rs+NwcD1G5X6uwuj2jw6CsZH7PK6LPmAuRpu6hVZ59Lu/Gri4/6YWT7HPrrKzPGaaplgcQ4xuLbjjZaqxn1pgpzjuMfxHCcCpSbvoad8bjxPi0/tASZaH/CA2B0utohcPvu3rQ+EALJdYFo05pU4vGw9T3mEzQcYZb+jtfoU9JVF2Qq5IMXZC0+7qAWvb5AkH/3NXl29X4X0y8k1k2a5GUpLnhBtbeyOoxZ7fNSQn08aS2l9FXKyR/eHXirIf8Ai+irFZ94VBblfQSRzyd5URz9UQBqpMg5BOq91//Z"
              alt=""
            />
            <p className="tot">K R Abhishek</p>
            <p className="tot">B.Tech - Aerospace - Alliance University</p>
            <div className="bor">
              <p className="tott">
              Pathshala has provided me a very good platform for studying from
                my home .{" "}
              </p>
            </div>
          </div>
          <div className="inner">
            <img
              width="200px"
              className="len"
           src= "data:image/jpeg;base64,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"
            />
            <p className="tot">Pulkit Jain</p>
            <p className="tot">B.Tech - IIT Roorkee, Co-Founder</p>
            <div className="bor">
              <p className="tott">
                {" "}
                Broad analysis of learning gaps affecting the child’s
                performance and learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
