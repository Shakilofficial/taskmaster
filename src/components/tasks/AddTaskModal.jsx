import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add New Task">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            {...register("title")}
            className="mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Description</label>
          <textarea
            {...register("description")}
            className="mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Deadline</label>
          <input
            type="date"
            {...register("deadline")}
            className="mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Assign to</label>
          <select
            {...register("assignTo")}
            className="mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          >
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Charlie">Charlie</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium ">Priority</label>
          <select
            {...register("priority")}
            className="mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-blue-600 py-2 "
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
