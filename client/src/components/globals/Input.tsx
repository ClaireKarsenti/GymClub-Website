type InputType = {
  label?: string;
  className: string;
  placeHolder: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?:boolean;
};

const Input = ({
  label,
  className,
  placeHolder,
  type,
  value,
  onChange,
  required,
}: InputType) => {
  return (
    <div>
      <label className="text-[2rem] text-white mb-3 font-medium ">
        {label}
      </label>
      <input
        className={className}
        placeholder={placeHolder}
        type={type}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
