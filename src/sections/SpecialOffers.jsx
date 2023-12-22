import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg"> 
          We Provide you <span className="text-coral-red">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur, magni tempora vitae ducimus vel 
          voluptate perferendis reiciendis vero nostrum quo velit a temporibus modi eos soluta nobis assumenda rerum!

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, atque!
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button label='Shop Now' iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="text-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
