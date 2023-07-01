import React from 'react'
import "./style.css"
const Trendspicks = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>TRENDING PICK</h1>
        <div className="row container-fluid" style={{backgroundColor:"#FFE4B5"}}>
            <div className="col-2 ">
                <div className=''>
                {/* <img src="https://img.freepik.com/premium-photo/fitness-girl-runner-running-sportswear-yellow-background_545934-5424.jpg" class="img-fluid roundh1" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="..."/> */}
                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://img.freepik.com/premium-photo/fitness-girl-runner-running-sportswear-yellow-background_545934-5424.jpg" style={{ maxHeight: "100%", maxWidth: "100%" }}  />
                <h4>SPORTSWEAR</h4>
                </div>
            </div>
            <div className="col-2 ">
                <div className=''>
                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://img.freepik.com/free-photo/happy-woman-yellow-dress_23-2148510338.jpg" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    <h4>DRESS</h4>
                </div>
            </div>
            <div className="col-2 ">
                <div className=''>
                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://img.freepik.com/premium-photo/fashionable-leather-women-s-shoes-located-diagonally-yellow-background-summer-shoes-women-flat-lay-view-from-top_94064-3298.jpg" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    <h4>FLAT & HEELS</h4>
                </div>
            </div>
            <div className="col-2 ">
                <div className=''>
                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://img.freepik.com/free-photo/man-cap-points-place-text-orange-background-handsome-adult-guy-classic-fashionable-outfit-poses-into-camera_197531-30043.jpg?w=1380&t=st=1688196386~exp=1688196986~hmac=b7cea271577894184a629893c54faf3ed4bc940a0698c9ba8b38a309549cc918" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    <h4>SHIRT</h4>
                </div>
            </div>
            <div className="col-2 ">
                <div className=''>
                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=1480&t=st=1688196857~exp=1688197457~hmac=cd6086dde02e9c8c64d80fc71b2bef1822908ed55f4375b50281c69bdd67781f" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    <h4>KURTAS</h4>
                </div>
            </div>
            <div className="col-2 ">
                <div className=''>
                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://img.freepik.com/free-photo/stylish-guy-black-trousers-beige-jacket-posing-orange-background-young-man-suit-hat-looking-into-camera-isolated_197531-28627.jpg?w=1380&t=st=1688196921~exp=1688197521~hmac=0d4a70e2d80367be7bcd023f3c9d04fc6eb5a179f9ee4be395c4ff66c124c579" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    <h4>TROUSERS</h4>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Trendspicks
