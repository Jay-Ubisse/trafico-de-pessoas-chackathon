import { AllMessagesTable } from "@/components/tables/all-messages-table";
import { AllVulnerableTable } from "@/components/tables/all-messages-table/all-vunerable-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadNumbersSheet } from "@/components/upload-numbers-sheet";

export default function Messages() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">Todas as pessoas</TabsTrigger>
        <TabsTrigger value="vulnerable">Pessoas vulneráveos</TabsTrigger>
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
        <div className="mt-4 flex justify-end">
          <UploadNumbersSheet />
        </div>
        <div>
          <AllVulnerableTable/>
        </div>
      </TabsContent>
    </Tabs>
  );
}
