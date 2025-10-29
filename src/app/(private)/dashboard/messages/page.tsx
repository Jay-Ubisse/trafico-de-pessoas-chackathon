import { AllMessagesTable } from "@/components/tables/all-messages-table";
import { VulnerableTable } from "@/components/tables/vunerable-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadNumbersSheet } from "@/components/upload-numbers-sheet";

export default function Messages() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">Todas as pessoas</TabsTrigger>
        <TabsTrigger value="vulnerable">Pessoas vulneráveis</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="mt-4 flex justify-end">
          <UploadNumbersSheet />
        </div>
        <div>
          <AllMessagesTable />
        </div>
      </TabsContent>
      <TabsContent value="vulnerable">
        <div className="mt-4">
          <VulnerableTable />
        </div>
      </TabsContent>
    </Tabs>
  );
}
