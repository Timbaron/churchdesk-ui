'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Church, Section } from '../types';
import * as apiClient from '../services/apiClient';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    currentUser: User | null;
    currentChurch: Church | null;
    currentSection: Section | null;
    isLoading: boolean;
    login: (email: string, pass: string) => Promise<void>;
    register: (churchName: string, adminName: string, email: string, pass: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentChurch, setCurrentChurch] = useState<Church | null>(null);
    const [currentSection, setCurrentSection] = useState<Section | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Persist login state
    useEffect(() => {
        const initializeAuth = async () => {
            const savedUser = await apiClient.getAuthUser();
            const token = await apiClient.getAuthToken();

            if (savedUser && token) {
                setCurrentUser(savedUser);
                apiClient.setAuthUserId(savedUser.id);
            }
            setIsLoading(false);
        };

        initializeAuth();
    }, []);

    // Fetch related church data when user is available
    useEffect(() => {
        if (currentUser && currentUser.church_id) {
            const fetchChurchData = async () => {
                try {
                    const churchData = await apiClient.getChurch(currentUser.church_id);
                    setCurrentChurch(churchData);
                    if (currentUser.section_id) {
                        const section = churchData.sections.find(s => s.id === currentUser.section_id);
                        setCurrentSection(section || null);
                    }
                } catch (error) {
                    console.error("Failed to fetch church data:", error);
                }
            };
            fetchChurchData();
        }
    }, [currentUser]);

    const login = async (email: string, pass: string) => {
        setIsLoading(true);
        try {
            const user = await apiClient.login(email, pass);
            setCurrentUser(user);
            router.push('/');
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (churchName: string, adminName: string, email: string, pass: string) => {
        setIsLoading(true);
        try {
            const newUser = await apiClient.registerChurch(churchName, adminName, email, pass);
            setCurrentUser(newUser);
            router.push('/');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        apiClient.clearAuthData();
        apiClient.clearAuthUserId();
        setCurrentUser(null);
        setCurrentChurch(null);
        setCurrentSection(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ currentUser, currentChurch, currentSection, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
