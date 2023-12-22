
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg"> 
          We Provide you <span className="text-coral-red">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur, magni tempora vitae ducimus vel 
          voluptate perferendis reiciendis vero nostrum quo velit a temporibus modi eos soluta nobis assumenda rerum!
        </p>
        <div className="mt-4">
          <Button label='Veiw Details'/>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522} 
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
