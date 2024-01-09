import Image from "next/image"
import Youtube from "../../assets/yt.png"
import Facebook from "../../assets/fb.png"
import Instagram from "../../assets/ig.png"
import Iphone from "../../assets/ipstore.png"
import Android from "../../assets/gplay.png"
import Plane from "../../assets/plane.png"
import X from "../../assets/tweet.png"


export default function Footer() {
    return(
        <main className="bg-white">
        <div className="container flex flex-wrap justify-around m-auto">
            <div className="box1 flex">
                <div className="logo mr-2">
                <Image src={Plane} />
                </div>
                <h1 className="text-black">Ankasa</h1>
            </div>
            <div className="box2">
                <h1 className="mb-5">Features</h1>
                <div className="menu">
                    <ul className="space-y-4">
                        <li>Find Ticket</li>
                        <li>My Booking</li>
                        <li>Chat</li>
                        <li>Notification</li>
                    </ul>
                </div>
            </div>
            <div className="box3">
                <h1 className="mb-5">Download Angkasa app</h1>
                <div className="device space-y-4">
                    <Image src={Iphone} />
                    <Image src={Android} />
                </div>
            </div>
            <div className="box4">
                <h1 className="text-center mb-5">Follow Us</h1>
                <div className="item flex gap-5">
                    <Image src={Youtube} />
                    <Image src={Facebook} />
                    <Image src={Instagram} />
                    <Image src={X} />
                </div>
            </div>
        </div>
        </main>
    )
}