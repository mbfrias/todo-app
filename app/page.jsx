// making a to-do list web app with React and Next.js - at the request of my father :)
'use client';

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Home.module.css"; // not using this, tailwind better
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const [todos, setTodos] = useState(savedTodos);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (!todo) return alert("cannot be empty");
        setTodos(prevTodos => {
            const updatedTodos = prevTodos ? [...prevTodos, { id: uuidv4(), text: todo }] : [{ id: uuidv4(), text: todo }];
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
        setTodo("");
    };
    
    const deleteTodo = (id) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };
    
    return (
        <div className="container mx-auto">
        <Head>
            <title>To-Do List</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <main className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-4xl font-bold">To-Do List</h1>
    
            <div className="flex flex-col items-center justify-center mt-10">
                <form className="flex flex-col items-center justify-center" onSubmit={(e) => {e.preventDefault(); addTodo()}}>
                    <input
                        className="border-2 border-gray-400 rounded-md p-2"
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        className="border-2 border-gray-400 rounded-md p-2 mt-2"
                        type="submit"
                    >
                        Add To-Do
                    </button>
                </form>
            </div>
    
            <div className="flex flex-col items-center justify-center mt-10">
            {
                /* get todos from local storage */
                localStorage.getItem("todos") !== null && JSON.parse(localStorage.getItem("todos")).map((todo) => (
                <div
                    key={todo.id}
                    className="border-2 border-gray-400 rounded-md p-2 mt-2 flex items-center justify-between"
                >
                    <p>{todo.text}</p>
                    <button onClick={() => deleteTodo(todo.id)} className="p-1 hover:text-red-600 transition-all duration-400">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                ))
            }
            </div>
        </main>
    
        <footer className="flex flex-col items-center justify-center mt-10">
            <p className="text-xl">
                made with <span className="text-red-500">❤</span> by <a href="https://www.marrtin.com">MAЯTÍN</a>
            </p>
        </footer>
        </div>
    );
}

