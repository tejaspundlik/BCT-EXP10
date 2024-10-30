"use client";

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import {
  ConnectButton,
  TransactionButton,
  useActiveAccount,
  useContractEvents,
  useReadContract,
} from "thirdweb/react";
import { contract } from "../utils/contract";

export const BuyMeCoffee = () => {
  const account = useActiveAccount();
  const [donationAmount, setDonationAmount] = useState(0);
  const [message, setMessage] = useState("");

  const { data: totalDonations, refetch: refetchTotalDonations } =
    useReadContract({
      contract: contract,
      method: "getTotalCoffee", // keeping the method unchanged
    });
  const imgStyle = {
    width: "150px",
    height: "150px", // Set uniform size for all images
    objectFit: "cover", // Ensures images retain aspect ratio within the box
  };
  const { data: contractEvents, refetch: refetchContractEvents } =
    useContractEvents({
      contract: contract,
    });

  if (account) {
    return (
      <div
        style={{
          // border: "1px solid #252525",
          // padding: "2rem",
          // borderRadius: "12px",
          // width: "100%",
          maxWidth: "450px",
          // margin: "2rem auto",
          backgroundColor: "#1c1c1c",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: "#ffffff",
          maxHeight: "80vh", // Limit the height of the container
          // overflow: "auto",
        }}
      >
        <div
          id="walter-container"
          onClick={() =>
            (window.location.href = "http://www.amctv.com/shows/breaking-bad")
          }
        >
          <h1>Walter White</h1>
          <h3 className="yellow">Father, Husband & Teacher</h3>

          {/* Compact Image Layout with consistent size */}
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_1.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
                <td>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_2.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
                <td>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_3.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_4.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
                <td>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_5.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
                <td>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_6.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  <img
                    src="http://www.savewalterwhite.com/img/walter_7.jpg"
                    alt="Walter White"
                    style={imgStyle}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p className="medium-copy yellow justify">
            My dad is amazing. It's funny, but I didn't know that until I found
            out he was going to die. That it was going to happen soon. That it
            was real. Then I thought about a lot of stuff. Things I hadn't
            thought about for a long time. I guess I kind of took him for
            granted or something. I mean, our parents are just always there. You
            expect them to always be bugging you to clean up your room or study
            harder or have good manners or try new things to grow up to be a
            more well-rounded person one day.
          </p>

          <p className="small-copy yellow justify">
            Now I feel lucky when he asks me about my day (I used to totally
            hate that question) or nags me about coming home on time at night
            and being responsible. One day he won't be here to ask. Now I feel
            lucky when I hear his car pulling into the driveway after school. I
            even like to hear him coughing. It means he's still around. Still my
            dad.
          </p>

          <p className="small-copy white">
            My dad is the chemistry teacher at my high school, and he's
            annoyingly smart. I mean, super brainiac annoying. He knows the most
            random stuff, like how at room temperature, mercury is the only
            metal that is in liquid form. And water expands as it drops in
            temperature, and by the time it's frozen, it takes up about 9% more
            space.
          </p>

          <p className="small-copy white">
            I realize two things now. First, I am already different because I
            have C.P., so that's a done deal. And two, he's the right dad for
            me. I can't do a lot of physical stuff because of my disability and
            that's okay with my dad, and it wouldn't be with a lot of other dads
            I've met. I really want to make sure he gets to keep doing what he
            loves to do for a long time. For him, for his students, and for me
            and my family.
          </p>

          <div className="ribbons">
            <p className="large-copy yellow middle">
              What a wonderful dad I have,
              <br />
              But he is in trouble.
            </p>
          </div>

          <p className="large-copy yellow middle">
            It's Lung Cancer. He needs an operation. Now!
          </p>

          <p className="large-copy dark-yellow middle">
            To help, please send your contribution to our operation fund and
            keep my Dad in your prayers!
          </p>

          <div id="banner-container" style={{ width: "450px" }}>
            <img
              src="http://www.savewalterwhite.com/img/save_walter_banner.png"
              style={{ width: "450px" }}
              alt="Save Walter White"
            />
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <ConnectButton client={client} chain={chain} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <label
            style={{
              fontSize: "1.15rem",
              color: "#ffffff",
              marginBottom: "0.5rem",
            }}
          >
            Donation Amount
          </label>
          <p
            style={{
              fontSize: "10px",
              color: "#888888",
              marginBottom: "0.5rem",
            }}
          >
            *Every donation, big or small, helps provide support for cancer
            patients.
          </p>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            step={0.01}
            style={{
              padding: "0.75rem",
              borderRadius: "6px",
              border: "1px solid #444444",
              backgroundColor: "#2c2c2c",
              color: "#ffffff",
              marginBottom: "1rem",
              fontSize: "1rem",
              outline: "none",
            }}
          />

          <label
            style={{
              fontSize: "1.15rem",
              color: "#ffffff",
              marginBottom: "0.5rem",
            }}
          >
            Message of Support
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a heartfelt message for Walt..."
            style={{
              padding: "0.75rem",
              borderRadius: "6px",
              border: "1px solid #444444",
              backgroundColor: "#2c2c2c",
              color: "#ffffff",
              marginBottom: "1rem",
              fontSize: "1rem",
              outline: "none",
            }}
          />

          {message && donationAmount > 0 && (
            <TransactionButton
              transaction={() =>
                prepareContractCall({
                  contract: contract,
                  method: "buyCoffee", // keeping the method unchanged
                  params: [message],
                  value: BigInt(toWei(donationAmount.toString())),
                })
              }
              onTransactionConfirmed={() => {
                alert("Thank you for your generous donation!");
                setDonationAmount(0);
                setMessage("");
                refetchTotalDonations();
                refetchContractEvents();
              }}
              style={{
                backgroundColor: "#4169e1",
                color: "#ffffff",
                fontSize: "1rem",
                padding: "0.75rem",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                textAlign: "center",
                transition: "background-color 0.3s ease",
                marginTop: "1rem",
              }}
            >
              Donate to Cancer Support
            </TransactionButton>
          )}
        </div>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#ffffff",
            }}
          >
            Total Support Contributions: {totalDonations?.toString()}
          </h3>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "1rem",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Recent Support Messages
          </p>
          {contractEvents &&
            contractEvents.length > 0 &&
            [...contractEvents].reverse().map((event, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#888888",
                    }}
                  >
                    {/* @ts-ignore */}
                    {event.args.sender}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#888888",
                    }}
                  >
                    {/* @ts-ignore */}
                    {event.args.timestamp}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#aaaaaa",
                  }}
                >
                  {/* @ts-ignore */}
                  {event.args.message}
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
};
